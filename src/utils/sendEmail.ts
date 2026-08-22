import nodemailer from "nodemailer";
import { env } from "../config/env";

export async function sendOtpEmail(to: string, otp: string) {
  // SMTP configure kora na thakle, dev e just console e print kore dei
  // tahole SMTP set up na kore o test kora jabe.
  if (!env.SMTP_USER || !env.SMTP_PASS) {
    console.log(`\n[DEV MODE] OTP for ${to}: ${otp}\n`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: false,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: "Your Verification Code",
    text: `Your verification code is: ${otp}. It will expire in ${env.OTP_EXPIRY_MINUTES} minutes.`,
    html: `<p>Your verification code is: <b>${otp}</b></p><p>It will expire in ${env.OTP_EXPIRY_MINUTES} minutes.</p>`,
  });
}
