import bcrypt from "bcrypt";
import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { generateOtp, getOtpExpiry } from "../../utils/otp";
import { sendOtpEmail } from "../../utils/sendEmail";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  getTokenExpiry,
} from "../../utils/jwt";
import { RoleType } from "../../constants/role";
import { OTP_TYPE, OtpTypeType } from "../../constants/otpType";

const SALT_ROUNDS = 10;


// OTP HELPERS 

// Generate a new OTP and invalidate the previous unused OTP
// for the same email and type.

// So the old code can no longer be used.
async function createOtp(email: string, type: OtpTypeType) {
  await prisma.otp.updateMany({
    where: { email, type, isUsed: false },
    data: { isUsed: true },
  });

  const otp = generateOtp();
  const expiresAt = getOtpExpiry();

  await prisma.otp.create({
    data: { email, otp, type, expiresAt },
  });

  await sendOtpEmail(email, otp);
}

// Find the most recent unused OTP by email and type, then verify it.
async function verifyOtp(email: string, otp: string, type: OtpTypeType) {
  const record = await prisma.otp.findFirst({
    where: { email, type, isUsed: false },
    orderBy: { createdAt: "desc" },
  });

  if (!record)
    throw new ApiError(400, "OTP not found, please request a new one");
  if (new Date() > record.expiresAt) throw new ApiError(400, "OTP has expired");
  if (record.otp !== otp) throw new ApiError(400, "Invalid OTP");

  await prisma.otp.update({
    where: { id: record.id },
    data: { isUsed: true },
  });
}


// STEP 1: Register


async function register(email: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser?.isEmailVerified) {
    throw new ApiError(409, "This email is already registered");
  }

  // user na thakle create kori (email chara r kono field lagbe na)
  if (!existingUser) {
    await prisma.user.create({ data: { email } });
  }

  await createOtp(email, OTP_TYPE.EMAIL_VERIFICATION);

  return { email };
}


// STEP 2: Verify Email

async function verifyEmail(email: string, otp: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(404, "User not found");
  if (user.isEmailVerified)
    throw new ApiError(400, "Email is already verified");

  await verifyOtp(email, otp, OTP_TYPE.EMAIL_VERIFICATION);

  await prisma.user.update({
    where: { email },
    data: { isEmailVerified: true },
  });

  return { email };
}


// STEP 2.1: Resend OTP

async function resendOtp(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(404, "User not found");
  if (user.isEmailVerified)
    throw new ApiError(400, "Email is already verified");

  await createOtp(email, OTP_TYPE.EMAIL_VERIFICATION);

  return { email };
}


// STEP 3: Complete Profile

async function completeProfile(
  email: string,
  firstName: string,
  lastName: string,
  password: string,
) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (!user.isEmailVerified)
    throw new ApiError(400, "Please verify your email first");

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await prisma.user.update({
    where: { email },
    data: { firstName, lastName, password: hashedPassword },
  });

  return { email };
}


//  Select Role 

async function selectRole(email: string, role: RoleType) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (!user.isEmailVerified)
    throw new ApiError(400, "Please verify your email first");
  if (!user.password)
    throw new ApiError(400, "Please complete your profile first");

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { role, isProfileComplete: true },
  });

  return issueTokensAndSave(
    updatedUser.id,
    updatedUser.email,
    updatedUser.role,
  );
}


// Login

async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.password) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  if (!user.isProfileComplete) {
    throw new ApiError(400, "Please complete your onboarding first");
  }

  return issueTokensAndSave(user.id, user.email, user.role);
}


// Refresh Token 

async function refreshToken(token: string) {
  let decoded;
  try {
    decoded = verifyRefreshToken(token);
  } catch {
    throw new ApiError(401, "Invalid or expired refresh token");
  }

  const record = await prisma.refreshToken.findFirst({
    where: { token, userId: decoded.userId, isRevoked: false },
  });

  if (!record) {
    throw new ApiError(401, "Refresh token not recognized (maybe logged out)");
  }
  if (new Date() > record.expiresAt) {
    throw new ApiError(401, "Refresh token has expired");
  }

  // Rotation: Revoke the currently used token
  // so it cannot be reused (security best practice).

  await prisma.refreshToken.update({
    where: { id: record.id },
    data: { isRevoked: true },
  });

  const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
  if (!user) throw new ApiError(404, "User not found");

  return issueTokensAndSave(user.id, user.email, user.role);
}

// Logout

async function logout(userId: string, refreshTokenValue: string) {
  await prisma.refreshToken.updateMany({
    where: { userId, token: refreshTokenValue, isRevoked: false },
    data: { isRevoked: true },
  });
}

// Change Password - protected

async function changePassword(
  userId: string,
  oldPassword: string,
  newPassword: string,
) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || !user.password) throw new ApiError(404, "User not found");

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) throw new ApiError(401, "Old password is incorrect");

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });
}

// Forgot Password

async function forgotPassword(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  // security best practice: user na thakleo same success response dei,
  // jate keu email exist kina check korte na pare
  if (!user) return;

  await createOtp(email, OTP_TYPE.PASSWORD_RESET);
}

// Reset Password

async function resetPassword(email: string, otp: string, newPassword: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(404, "User not found");

  await verifyOtp(email, otp, OTP_TYPE.PASSWORD_RESET);

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });
}

// Helper: generate the token and refresh token save the table

async function issueTokensAndSave(
  userId: string,
  email: string,
  role: string | null,
) {
  const payload = { userId, email, role };

  const accessToken = generateAccessToken(payload);
  const refreshTokenValue = generateRefreshToken(payload);
  const expiresAt = getTokenExpiry(refreshTokenValue);

  // notun ekta row create kori - purono device gulor token muche felchi na,
  // tai user ekadhik device e ekshathe login thakte parbe
  await prisma.refreshToken.create({
    data: { userId, token: refreshTokenValue, expiresAt },
  });

  return { accessToken, refreshToken: refreshTokenValue };
}

export const authService = {
  register,
  verifyEmail,
  resendOtp,
  completeProfile,
  selectRole,
  login,
  refreshToken,
  logout,
  changePassword,
  forgotPassword,
  resetPassword,
};
