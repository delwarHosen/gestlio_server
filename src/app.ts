import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";
import authRoutes from "./modules/auth/auth.routes";
import profileRoutes from "./modules/profile/profile.routes";
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

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler - সবসময় সবার শেষে থাকবে
app.use(errorMiddleware);

export default app;