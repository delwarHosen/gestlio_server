import multer from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";
import { ApiError } from "../utils/ApiError";

// Folder where uploaded images will be stored
const uploadDir = path.join(process.cwd(), "uploads", "profile-images");

// Create the folder if it doesn't exist yet
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // unique filename: timestamp-random.extension
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

function fileFilter(
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.mimetype)) {
    return cb(
      new ApiError(400, "Only JPG, PNG, or WEBP images are allowed") as any,
    );
  }

  cb(null, true);
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, 
});
