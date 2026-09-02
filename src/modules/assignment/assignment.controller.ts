import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { sendResponse } from "../../utils/ApiResponse";
import { assignmentService } from "./assignment.service";

// ---------- Host actions ----------

export const assignCleaner = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const assignment = await assignmentService.assignCleaner(
    req.user.userId,
    req.params.accommodationId,
    req.body
  );

  sendResponse(res, 201, "Cleaner invited successfully", assignment);
});

export const getAssignedCleaners = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const assignments = await assignmentService.getAssignedCleaners(
    req.user.userId,
    req.params.accommodationId
  );

  sendResponse(res, 200, "Assigned cleaners fetched successfully", assignments);
});

export const changeCleanerRole = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const assignment = await assignmentService.changeCleanerRole(
    req.user.userId,
    req.params.assignmentId,
    req.body.role
  );

  sendResponse(res, 200, "Cleaner role updated successfully", assignment);
});

export const removeCleaner = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  await assignmentService.removeCleaner(req.user.userId, req.params.assignmentId);
  sendResponse(res, 200, "Cleaner removed successfully");
});

// ---------- Cleaner actions ----------

export const getMyRequests = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const requests = await assignmentService.getMyRequests(req.user.userId);
  sendResponse(res, 200, "Requests fetched successfully", requests);
});

export const respondToRequest = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const assignment = await assignmentService.respondToRequest(
    req.user.userId,
    req.params.assignmentId,
    req.body.action
  );

  sendResponse(res, 200, `Request ${req.body.action}ed successfully`, assignment);
});

export const getMyAcceptedAccommodations = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const accommodations = await assignmentService.getMyAcceptedAccommodations(req.user.userId);
  sendResponse(res, 200, "Accepted accommodations fetched successfully", accommodations);
});

// completed task
export const completeAssignment = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const assignment = await assignmentService.completeAssignment(
    req.user.userId,
    req.params.assignmentId
  );

  sendResponse(res, 200, "Assignment marked as completed", assignment);
});