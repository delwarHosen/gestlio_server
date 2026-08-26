import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { profileService } from "./profile.service";
import { sendResponse } from "../../utils/ApiResponse";

export const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");
  const profile = await profileService.getMyProfile(req.user.userId);
  sendResponse(res, 200, "Profile fetched successfully", profile);
});

export const updateMe = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  // multer stores the uploaded file info on req.file
  const uploadedFile = req.file as Express.Multer.File | undefined;
  const profileImagePath = uploadedFile
    ? `/uploads/profile-images/${uploadedFile.filename}`
    : undefined;

  const updatedProfile = await profileService.updateMe(req.user.userId, req.body, profileImagePath);
  sendResponse(res, 200, "Profile updated successfully", updatedProfile);
});

export const setupCleanerProfile = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const uploadedFile = req.file as Express.Multer.File | undefined;
  const profileImagePath = uploadedFile
    ? `/uploads/profile-images/${uploadedFile.filename}`
    : undefined;

  const profile = await profileService.setupCleanerProfile(req.user.userId, req.body, profileImagePath);
  sendResponse(res, 200, "Cleaner profile setup completed successfully", profile);
});