import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/Apiresponse";

export const register = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await authService.register(email);
  sendResponse(res, 200, "OTP sent to your email", result);
});

export const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  const result = await authService.verifyEmail(email, otp);
  sendResponse(res, 200, "Email verified successfully", result);
});

export const resendOtp = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await authService.resendOtp(email);
  sendResponse(res, 200, "OTP resent successfully", result);
});

export const completeProfile = catchAsync(async (req: Request, res: Response) => {
  const { email, firstName, lastName, password } = req.body;
  const result = await authService.completeProfile(email, firstName, lastName, password);
  sendResponse(res, 200, "Profile completed successfully", result);
});

export const selectRole = catchAsync(async (req: Request, res: Response) => {
  const { email, role } = req.body;
  const tokens = await authService.selectRole(email, role);
  sendResponse(res, 200, "Onboarding completed. You are now logged in.", tokens);
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const tokens = await authService.login(email, password);
  sendResponse(res, 200, "Login successful", tokens);
});

export const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken: token } = req.body;
  const tokens = await authService.refreshToken(token);
  sendResponse(res, 200, "Token refreshed successfully", tokens);
});

export const logout = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");
  const { refreshToken } = req.body;
  await authService.logout(req.user.userId, refreshToken);
  sendResponse(res, 200, "Logged out successfully");
});

export const changePassword = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");
  const { oldPassword, newPassword } = req.body;
  await authService.changePassword(req.user.userId, oldPassword, newPassword);
  sendResponse(res, 200, "Password changed successfully");
});

export const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  await authService.forgotPassword(email);
  sendResponse(res, 200, "If this email exists, an OTP has been sent");
});

export const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;
  await authService.resetPassword(email, otp, newPassword);
  sendResponse(res, 200, "Password reset successfully");
});