import PaymentFailedEmail from "../../emails/templates/payment-failed";
import ResetPasswordEmail from "../../emails/templates/reset-password";
import SubscriptionCancelledEmail from "../../emails/templates/subscription-cancelled";
import SubscriptionPurchasedEmail from "../../emails/templates/subscription-purchased";
import VerifyEmailEmail from "../../emails/templates/verify-email";
import { sendReactEmail } from "./mailer";

interface EmailUser {
  name: string;
  email: string;
}

export const sendSubscriptionPurchasedEmail = async (user: EmailUser) => {
  await sendReactEmail(
    user.email,
    "Welcome to Premium! Your subscription is active",
    SubscriptionPurchasedEmail({
      userName: user.name,
      userEmail: user.email,
    })
  );
};

export const sendSubscriptionCancelledEmail = async (user: EmailUser) => {
  await sendReactEmail(
    user.email,
    "Your subscription has been cancelled",
    SubscriptionCancelledEmail({
      userName: user.name,
      userEmail: user.email,
    })
  );
};

export const sendPaymentFailedEmail = async (
  user: EmailUser,
  nextRetryDate?: string
) => {
  await sendReactEmail(
    user.email,
    "Action Required: Payment Failed",
    PaymentFailedEmail({
      userName: user.name,
      userEmail: user.email,
      nextRetryDate,
    })
  );
};

export const sendResetPasswordEmail = async (
  user: EmailUser,
  resetUrl: string
) => {
  await sendReactEmail(
    user.email,
    "Reset your password",
    ResetPasswordEmail({
      userName: user.name,
      userEmail: user.email,
      resetUrl,
    })
  );
};

export const sendVerifyEmailEmail = async (
  user: EmailUser,
  verificationUrl: string
) => {
  await sendReactEmail(
    user.email,
    "Verify your email address",
    VerifyEmailEmail({
      userName: user.name,
      userEmail: user.email,
      verificationUrl,
    })
  );
};
