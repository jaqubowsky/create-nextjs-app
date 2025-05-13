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
  },
  GENERAL: {
    SERVER_ERROR: "An unexpected error occurred. Please try again later.",
    RATE_LIMIT: "Too many requests. Please try again later.",
  },
};
