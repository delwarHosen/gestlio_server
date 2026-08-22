import { Router } from "express";
import * as authController from "./auth.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate } from "../../middlewares/auth.middleware";
import {
  registerSchema,
  verifyEmailSchema,
  resendOtpSchema,
  completeProfileSchema,
  selectRoleSchema,
  loginSchema,
  refreshTokenSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "./auth.validation";

const router = Router();

// ---------- Onboarding (public) ----------
router.post("/register", validate(registerSchema), authController.register);
router.post("/verify-email", validate(verifyEmailSchema), authController.verifyEmail);
router.post("/resend-otp", validate(resendOtpSchema), authController.resendOtp);
router.post("/complete-profile", validate(completeProfileSchema), authController.completeProfile);
router.post("/select-role", validate(selectRoleSchema), authController.selectRole);





export default router;