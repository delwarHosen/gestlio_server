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








