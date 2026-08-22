import { env } from "../config/env";

// 6 digit OTP - 
export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpExpiry(): Date {
  return new Date(Date.now() + env.OTP_EXPIRY_MINUTES * 60 * 1000);
}

export function isOtpExpired(expiry: Date | null): boolean {
  if (!expiry) return true;
  return new Date() > expiry;
}