import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { env } from "../config/env";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === "ZodError") {
    // zod validation error hole
    statusCode = 400;
    message = err.errors?.[0]?.message || "Validation error";
  } else if (err.code === "P2002") {
    // Prisma unique constraint violation (e.g. email already exists)
    statusCode = 409;
    message = "This email is already in use";
  } else if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(env.NODE_ENV === "development" && { stack: err.stack }),
  });
}
