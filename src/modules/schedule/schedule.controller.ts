import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { sendResponse } from "../../utils/ApiResponse";
import { scheduleService } from "./schedule.service";

// ---------- Host actions ----------

export const createSchedule = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.createSchedule(
    req.user.userId,
    req.params.accommodationId,
    req.body
  );

  sendResponse(res, 201, "Schedule created successfully", schedule);
});

export const getHostSchedules = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedules = await scheduleService.getHostSchedules(req.user.userId);
  sendResponse(res, 200, "Schedules fetched successfully", schedules);
});


export const getCleanerHome = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const home = await scheduleService.getCleanerHome(req.user.userId);
  sendResponse(res, 200, "Home data fetched successfully", home);
});


export const editSchedule = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.editSchedule(
    req.user.userId,
    req.params.scheduleId,
    req.body
  );

  sendResponse(res, 200, "Schedule updated successfully", schedule);
});

export const deleteSchedule = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  await scheduleService.deleteSchedule(req.user.userId, req.params.scheduleId);
  sendResponse(res, 200, "Schedule deleted successfully");
});

export const invalidateTask = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.invalidateTask(
    req.user.userId,
    req.params.scheduleId,
    req.body.reason
  );

  sendResponse(res, 200, "Task invalidated successfully", schedule);
});

export const completeTask = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.completeTask(req.user.userId, req.params.scheduleId);
  sendResponse(res, 200, "Task completed successfully", schedule);
});

// ---------- Cleaner actions ----------

export const getCleanerSchedules = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedules = await scheduleService.getCleanerSchedules(req.user.userId);
  sendResponse(res, 200, "Schedules fetched successfully", schedules);
});

export const respondToSchedule = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.respondToSchedule(
    req.user.userId,
    req.params.scheduleId,
    req.body.action
  );

  sendResponse(res, 200, `Schedule ${req.body.action}ed successfully`, schedule);
});

export const submitProof = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  // multer.array("proofPhotos") puts uploaded files on req.files
  const uploadedFiles = (req.files as Express.Multer.File[]) || [];
  const photoPaths = uploadedFiles.map((file) => `/uploads/schedule-proofs/${file.filename}`);

  const schedule = await scheduleService.submitProof(
    req.user.userId,
    req.params.scheduleId,
    req.body.proofNotes,
    photoPaths
  );

  sendResponse(res, 200, "Proof submitted successfully", schedule);
});

export const reportDispute = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.reportDispute(
    req.user.userId,
    req.params.scheduleId,
    req.body.reason
  );

  sendResponse(res, 200, "Dispute reported successfully", schedule);
});

// ---------- Shared ----------

export const getScheduleById = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const schedule = await scheduleService.getScheduleById(req.user.userId, req.params.scheduleId);
  sendResponse(res, 200, "Schedule fetched successfully", schedule);
});