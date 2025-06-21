export const RATE_LIMITS = {
  AUTH: {
    MAX_REQUESTS: 5,
    WINDOW: "30 s",
  },
  PUBLIC_API: {
    MAX_REQUESTS: 20,
    WINDOW: "10 s",
  },
} as const;

export const AUTH_CONFIG = {
  SESSION_EXPIRY: 24 * 60 * 60, // 24 hours in seconds
  EMAIL_VERIFICATION_EXPIRY: 3600, // 1 hour in seconds
  PASSWORD_RESET_EXPIRY: 3600, // 1 hour in seconds

  EMAIL_RESEND_COOLDOWN: 60, // 30 seconds between resend attempts

  PASSWORD: {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBERS: true,
    REQUIRE_SYMBOLS: false,
  },

  BCRYPT_SALT_ROUNDS: 12,
} as const;

export const STRIPE_CONFIG = {
  WEBHOOK_TOLERANCE: 300, // 5 minutes in seconds

  API_VERSION: "2024-06-20",
} as const;

export const EMAIL_CONFIG = {
  SMTP: {
    POOL: true,
    MAX_CONNECTIONS: 5,
    MAX_MESSAGES: 100,
  },

  RATE_LIMIT: {
    MAX_EMAILS_PER_HOUR: 10,
    MAX_EMAILS_PER_DAY: 50,
  },
} as const;

export const SENTRY_CONFIG = {
  TRACES_SAMPLE_RATE: {
    DEVELOPMENT: 1.0,
    PRODUCTION: 0.1,
  },

  CAPTURE_CONSOLE: false,
  ATTACH_STACKTRACE: true,
} as const;
