import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { sendResponse } from "../../utils/ApiResponse";
import { cleanerService } from "./cleaner.service";

export const getCleaners = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const result = await cleanerService.getCleaners(req.query as any);
  sendResponse(res, 200, "Cleaners fetched successfully", result);
});

export const getCleanerById = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const cleaner = await cleanerService.getCleanerById(req.params.id);
  sendResponse(res, 200, "Cleaner fetched successfully", cleaner);
});