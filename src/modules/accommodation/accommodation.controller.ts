import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { accommodationService } from "./accommodation.service";
import { sendResponse } from "../../utils/ApiResponse";

export const createAccommodation = catchAsync(
  async (req: Request, res: Response) => {
    if (!req.user) throw new ApiError(401, "Unauthorized");

    // multer.array("photos") diye upload kora file gula req.files e ashe
    const uploadedFiles = (req.files as Express.Multer.File[]) || [];
    const photoPaths = uploadedFiles.map(
      (file) => `/uploads/accommodation-photos/${file.filename}`,
    );

    const accommodation = await accommodationService.createAccommodation(
      req.user.userId,
      req.body,
      photoPaths,
    );

    sendResponse(res, 201, "Accommodation created successfully", accommodation);
  },
);

export const getMyAccommodations = catchAsync(
  async (req: Request, res: Response) => {
    if (!req.user) throw new ApiError(401, "Unauthorized");

    const result = await accommodationService.getMyAccommodations(
      req.user.userId,
      req.query as any,
    );

    sendResponse(res, 200, "Accommodations fetched successfully", result);
  },
);



export const getHomeTodo = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const todo = await accommodationService.getHomeTodo(req.user.userId);
  sendResponse(res, 200, "Home to-do feed fetched successfully", todo);
});

export const getRecommendedSchedule = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const recommended = await accommodationService.getRecommendedSchedule(req.user.userId);
  sendResponse(res, 200, "Recommended schedule fetched successfully", recommended);
});



// get accommodation by id
export const getAccommodationById = catchAsync(
  async (req: Request, res: Response) => {
    if (!req.user) throw new ApiError(401, "Unauthorized");

    const accommodation = await accommodationService.getAccommodationById(
      req.params.id,
      req.user.userId,
    );
    sendResponse(res, 200, "Accommodation fetched successfully", accommodation);
  },
);

// updated accommodation
export const updateAccommodation = catchAsync(
  async (req: Request, res: Response) => {
    if (!req.user) throw new ApiError(401, "Unauthorized");

    const uploadedFiles = (req.files as Express.Multer.File[]) || [];
    const newPhotoPaths = uploadedFiles.map(
      (file) => `/uploads/accommodation-photos/${file.filename}`,
    );

    const updatedAccommodation = await accommodationService.updateAccommodation(
      req.params.id,
      req.user.userId,
      req.body,
      newPhotoPaths,
    );
    sendResponse(
      res,
      200,
      "Accommodation updated successfully",
      updatedAccommodation,
    );
  },
);


// delete accommodation
export const deleteAccommodation = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");
  await accommodationService.deleteAccommodation(req.params.id, req.user.userId);
  sendResponse(res, 200, "Accommodation deleted successfully");
});