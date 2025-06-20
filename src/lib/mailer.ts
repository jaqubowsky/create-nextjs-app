import { env } from "@/lib/env";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { ReactElement } from "react";
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

export const sendReactEmail = async (
  to: string,
  subject: string,
  reactTemplate: ReactElement,
  from: string = env.EMAIL_FROM
) => {
  try {
    const html = await render(reactTemplate);
    const text = await render(reactTemplate, { plainText: true });

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
    });
  } catch (error) {
    logError({ error, origin: "sendReactEmail" });
    throw error;
  }
};
