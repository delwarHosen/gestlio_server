import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ApiError } from "../../utils/ApiError";
import { sendResponse } from "../../utils/ApiResponse";
import { paymentService } from "./payment.service";

export const setPaymentAccepted = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const result = await paymentService.setPaymentAccepted(
    req.user.userId,
    req.body.isPaymentAccepted
  );

  sendResponse(res, 200, "Payment status updated successfully", result);
});

export const getPaymentAccepted = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) throw new ApiError(401, "Unauthorized");

  const result = await paymentService.getPaymentAccepted(req.user.userId);
  sendResponse(res, 200, "Payment status fetched successfully", result);
});