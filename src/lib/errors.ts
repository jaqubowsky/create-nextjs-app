export const errors = {
  AUTH: {
    UNAUTHORIZED: "Unauthorized. Please log in to continue.",
    EMAIL_IN_USE: "Email already in use.",
    AUTHENTICATION_FAILED: "Authentication failed. Please try again.",
    REGISTRATION_FAILED: "Registration failed. Please try again.",
    FORGOT_PASSWORD_FAILED:
      "Failed to send password reset email. Please try again.",
    RESET_PASSWORD_FAILED: "Failed to reset password. Please try again.",
    INVALID_RESET_TOKEN:
      "Invalid or expired reset token. Please request a new password reset link.",
    OAUTH_ACCESS_DENIED: "Access was denied. Please try signing in again.",
    OAUTH_ACCOUNT_EXISTS:
      "An account with this email already exists. Please sign in with your email and password.",
    OAUTH_PROVIDER_ERROR:
      "There was an error with the authentication provider. Please try again.",
    OAUTH_INVALID_REQUEST: "Invalid authentication request. Please try again.",
    OAUTH_SERVER_ERROR:
      "Authentication service is temporarily unavailable. Please try again later.",
    EMAIL_VERIFIED: "Email is already verified.",
    SEND_VERIFICATION_EMAIL_FAILED:
      "Failed to send verification email. Please try again.",
  },
  STRIPE: {
    CUSTOMER_NOT_FOUND: "Customer not found.",
  },
  GENERAL: {
    SERVER_ERROR: "An unexpected error occurred. Please try again later.",
    RATE_LIMIT: "Too many requests. Please try again later.",
  },
} as const;

export class ActionError extends Error {}
