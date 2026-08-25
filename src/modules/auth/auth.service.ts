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


// Creates a new OTP and invalidates any previous unused OTP
// of the same email + type, so old codes stop working.
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

// Finds the most recent unused OTP for email + type and verifies it.
async function verifyOtp(email: string, otp: string, type: OtpTypeType) {
  const record = await prisma.otp.findFirst({
    where: { email, type, isUsed: false },
    orderBy: { createdAt: "desc" },
  });

  if (!record) throw new ApiError(400, "OTP not found, please request a new one");
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

  // Create the user if they don't exist yet (only email is required at this point)
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
  if (user.isEmailVerified) throw new ApiError(400, "Email is already verified");

  await verifyOtp(email, otp, OTP_TYPE.EMAIL_VERIFICATION);

  await prisma.user.update({
    where: { email },
    data: { isEmailVerified: true },
  });

  return { email };
}

//.
// STEP 2.1: Resend OTP
//.
async function resendOtp(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(404, "User not found");
  if (user.isEmailVerified) throw new ApiError(400, "Email is already verified");

  await createOtp(email, OTP_TYPE.EMAIL_VERIFICATION);

  return { email };
}

// STEP 3: Complete Profile

async function completeProfile(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (!user.isEmailVerified) throw new ApiError(400, "Please verify your email first");

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await prisma.user.update({
    where: { email },
    data: { firstName, lastName, password: hashedPassword },
  });

  return { email };
}


// STEP 4: Select Role (completes onboarding + auto login)

async function selectRole(email: string, role: RoleType) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (!user.isEmailVerified) throw new ApiError(400, "Please verify your email first");
  if (!user.password) throw new ApiError(400, "Please complete your profile first");

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { role, isProfileComplete: true },
  });

  return issueTokensAndSave(updatedUser.id, updatedUser.email, updatedUser.role);
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


// Refresh Token (with rotation: revoke the old one, issue a new one)

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

  // Rotation: revoke the token that was just used so it can't be reused
  // (this is a security best practice)
  await prisma.refreshToken.update({
    where: { id: record.id },
    data: { isRevoked: true },
  });

  const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
  if (!user) throw new ApiError(404, "User not found");

  return issueTokensAndSave(user.id, user.email, user.role);
}


// Logout (only revokes the current device's token)

async function logout(userId: string, refreshTokenValue: string) {
  await prisma.refreshToken.updateMany({
    where: { userId, token: refreshTokenValue, isRevoked: false },
    data: { isRevoked: true },
  });
}


// Change Password (protected)

async function changePassword(
  userId: string,
  oldPassword: string,
  newPassword: string
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

  // Security best practice: return the same success response whether
  // or not the user exists, so no one can probe which emails are registered.
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


// Delete Account (protected - requires password confirmation)
async function deleteAccount(userId: string, password: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || !user.password) throw new ApiError(404, "User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, "Password is incorrect");

  // Deleting the user will also delete their RefreshToken rows automatically
  // (onDelete: Cascade is set in schema.prisma)
  await prisma.user.delete({ where: { id: userId } });
}


// Helper: generates tokens and saves the refresh token in the DB

async function issueTokensAndSave(
  userId: string,
  email: string,
  role: string | null
) {
  const payload = { userId, email, role };

  const accessToken = generateAccessToken(payload);
  const refreshTokenValue = generateRefreshToken(payload);
  const expiresAt = getTokenExpiry(refreshTokenValue);

  // Create a new row instead of overwriting - this lets a user
  // stay logged in on multiple devices at the same time.
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
  deleteAccount,
  forgotPassword,
  resetPassword,
};