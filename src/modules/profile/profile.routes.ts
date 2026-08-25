import { Router } from "express";
import * as profileController from "./profile.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate } from "../../middlewares/auth.middleware";
import { upload } from "../../middlewares/upload.middleware";
import { updateMeSchema, setupCleanerProfileSchema } from "./profile.validation";

const router = Router();

router.get("/get-my-profile", authenticate, profileController.getMyProfile);

// upload.single("profileImage") must run BEFORE validate(),
// because multer is what parses the multipart/form-data body -
// until it runs, req.body is empty and zod has nothing to check.
router.patch(
  "/update-me",
  authenticate,
  upload.single("profileImage"),
  validate(updateMeSchema),
  profileController.updateMe
);

// Mandatory, one-time Cleaner onboarding wizard - called right after
// signup (select-role), before the cleaner can use the rest of the app.
router.post(
  "/cleaner/setup-profile",
  authenticate,
  upload.single("profileImage"),
  validate(setupCleanerProfileSchema),
  profileController.setupCleanerProfile
);

export default router;