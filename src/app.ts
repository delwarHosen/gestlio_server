import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";
import authRoutes from "./modules/auth/auth.routes";
import profileRoutes from "./modules/profile/profile.routes";
import accommodationRoutes from "./modules/accommodation/accommodation.routes";
import cleanerRoutes from "./modules/cleaner/cleaner.routes";
import paymentRoutes from "./modules/payment/payment.routes";
import assignmentRoutes from "./modules/assignment/assignment.routes";
import scheduleRoutes from "./modules/schedule/schedule.routes";

import { errorMiddleware } from "./middlewares/error.middleware";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files (profile images) publicly
// e.g. http://localhost:5000/uploads/profile-images/xxxx.jpg
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Health check
app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, message: "Hotel Cleaning Backend is running" });
});

// API routes
app.use("/api/v1/auth", authRoutes);
// Profile module is code-organized separately, but kept under the same
// /auth prefix so the existing Postman URLs (/auth/update-me etc.) still work
app.use("/api/v1/auth", profileRoutes);

// Accommodation api endpoint
app.use("/api/v1/accommodation", accommodationRoutes);

// cleaner route by host
app.use("/api/v1/cleaner", cleanerRoutes);

// Assignment task to cleaner
app.use("/api/v1/assignment", assignmentRoutes);

//Payment routers
app.use("/api/v1/payment", paymentRoutes);

// schedult path
app.use("/api/v1/schedule", scheduleRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler - সবসময় সবার শেষে থাকবে
app.use(errorMiddleware);

export default app;