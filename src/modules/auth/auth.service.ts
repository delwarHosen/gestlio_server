import bcrypt from "bcryptjs";
import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { generateOtp, getOtpExpiry, isOtpExpired } from "../../utils/otp";
import { sendOtpEmail } from "../../utils/sendEmail";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt";
import { RoleType } from "../../constants/role";

const SALT_ROUNDS = 10;

// ---------------- STEP 1: Register ----------------
async function register(email: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser?.isVerified) {
    throw new ApiError(409, "This email is already registered");
  }

  const otp = generateOtp();
  const otpExpiry = getOtpExpiry();

  //if the user does not exist ,create new user
  const user = await prisma.user.upsert({
    where: { email },
    update: { otp, otpExpiry },
    create: { email, otp, otpExpiry },
  });

  await sendOtpEmail(email, otp);

  return { email: user.email };
}

// -------- STEP 2: Verify Email ----------------
async function verifyEmail(email: string, otp: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (user.isVerified) throw new ApiError(400, "Email is already verified");
  if (isOtpExpired(user.otpExpiry)) throw new ApiError(400, "OTP has expired");
  if (user.otp !== otp) throw new ApiError(400, "Invalid OTP");

  await prisma.user.update({
    where: { email },
    data: { isVerified: true, otp: null, otpExpiry: null },
  });

  return { email };
}

// ----- STEP 2.1: Resend OTP -------
async function resendOtp(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(404, "User not found");
  if (user.isVerified) throw new ApiError(400, "Email is already verified");

  const otp = generateOtp();
  const otpExpiry = getOtpExpiry();

  await prisma.user.update({
    where: { email },
    data: { otp, otpExpiry },
  });

  await sendOtpEmail(email, otp);

  return { email };
}

// ------- STEP 3: Complete Profile ------
async function completeProfile(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (!user.isVerified) throw new ApiError(400, "Please verify your email first");

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await prisma.user.update({
    where: { email },
    data: { firstName, lastName, password: hashedPassword },
  });

  return { email };
}

// --- Select Role (onboarding complete + auto login) --------
async function selectRole(email: string, role: RoleType) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, "User not found");
  if (!user.isVerified) throw new ApiError(400, "Please verify your email first");
  if (!user.password) throw new ApiError(400, "Please complete your profile first");

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { role, isProfileCompleted: true },
  });

  return issueTokensAndSave(updatedUser.id, updatedUser.email, updatedUser.role);
}


// ---------------- Helper: token generate kore DB te save kora ----------------
async function issueTokensAndSave(
  userId: string,
  email: string,
  role: string | null
) {
  const payload = { userId, email, role };

  const accessToken = generateAccessToken(payload);
  const refreshTokenValue = generateRefreshToken(payload);

  await prisma.user.update({
    where: { id: userId },
    data: { refreshToken: refreshTokenValue },
  });

  return { accessToken, refreshToken: refreshTokenValue };
}

export const authService = {
  register,
  verifyEmail,
  resendOtp,
  completeProfile,
  selectRole
};