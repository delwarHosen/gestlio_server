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
  logoutSchema,
  changePasswordSchema,
  deleteAccountSchema,
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

// ---------- Login / Session (public) ----------
router.post("/login", validate(loginSchema), authController.login);
router.post("/refresh-token", validate(refreshTokenSchema), authController.refreshToken);

// ---------- Protected (needs Bearer token) ----------
router.post("/logout", authenticate, validate(logoutSchema), authController.logout);
router.post("/change-password", authenticate, validate(changePasswordSchema), authController.changePassword);
router.delete("/delete-account", authenticate, validate(deleteAccountSchema), authController.deleteAccount);

// ---------- Password recovery (public) ----------
router.post("/forgot-password", validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), authController.resetPassword);

export default router;