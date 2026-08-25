import { z } from "zod";
import { ROLE } from "../../constants/role";

// The UI shows 3 password rules:
// - at least 8 characters
// - one uppercase letter and one number
// - one special character (@, #, !)
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[@#!$%^&*]/, "Password must contain at least one special character");

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
  }),
});

export const verifyEmailSchema = z.object({
  body: z.object({
    email: z.string().email(),
    otp: z.string().length(6, "OTP must be 6 digits"),
  }),
});

export const resendOtpSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});

export const completeProfileSchema = z.object({
  body: z.object({
    email: z.string().email(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    password: passwordSchema,
  }),
});

export const selectRoleSchema = z.object({
  body: z.object({
    email: z.string().email(),
    role: z.enum([ROLE.HOST, ROLE.CLEANER]),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, "Refresh token is required"),
  }),
});

export const logoutSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, "Refresh token is required"),
  }),
});

export const changePasswordSchema = z.object({
  body: z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: passwordSchema,
  }),
});

export const deleteAccountSchema = z.object({
  body: z.object({
    password: z.string().min(1, "Password is required to delete your account"),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
    otp: z.string().length(6, "OTP must be 6 digits"),
    newPassword: passwordSchema,
  }),
});