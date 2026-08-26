import multer from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";
import { ApiError } from "../utils/ApiError";

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

// Factory: "uploads/<folderName>" e file save kore emon ekta
// multer instance banay. Ekhon jekono module (profile, accommodation,
// task-proof ityadi) nijer folder name diye eta reuse korte parbe -
// alada alada upload middleware file banano lagbe na.
function createUploader(folderName: string) {
  const uploadDir = path.join(process.cwd(), "uploads", folderName);

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const ext = path.extname(file.originalname);
      cb(null, `${uniqueSuffix}${ext}`);
    },
  });

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  });
}

// Existing usage (profile.routes.ts) ekhono thik moto kaj korbe -
// naam ba import kichu change korte hobe na
export const upload = createUploader("profile-images");

// Notun: accommodation photos er jonno
export const uploadAccommodationPhotos = createUploader("accommodation-photos");