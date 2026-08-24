export const OTP_TYPE = {
  EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
  PASSWORD_RESET: "PASSWORD_RESET",
} as const;

export type OtpTypeType = (typeof OTP_TYPE)[keyof typeof OTP_TYPE];