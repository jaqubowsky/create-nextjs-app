import { env } from "@/lib/env";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { logError } from "./sentry";

export const transporter = nodemailer.createTransport({
  service: env.EMAIL_SERVICE,
  host: env.EMAIL_SERVER_HOST,
  port: Number(env.EMAIL_SERVER_PORT),
  auth: {
    user: env.EMAIL_SERVER_USER,
    pass: env.EMAIL_SERVER_PASSWORD,
  },
  secure: env.NODE_ENV === "production",
});

export const sendMail = (mailOptions: MailOptions) => {
  try {
    transporter.sendMail(mailOptions);
  } catch (error) {
    logError({ error, origin: "sendMail" });

    throw error;
  }
};
