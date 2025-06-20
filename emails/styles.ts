export const emailStyles = {
  main: {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },

  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
  },

  logoContainer: {
    textAlign: "center" as const,
    marginBottom: "32px",
  },

  h1: {
    color: "#1f2937",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
    textAlign: "center" as const,
  },

  h2: {
    color: "#1f2937",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "30px 0 15px",
    textAlign: "center" as const,
  },

  text: {
    color: "#374151",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "16px 0",
  },

  // Buttons
  buttonContainer: {
    textAlign: "center" as const,
    margin: "32px 0",
  },

  button: {
    backgroundColor: "#3b82f6",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
  },

  hr: {
    borderColor: "#e5e7eb",
    margin: "42px 0 26px",
  },

  footer: {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "20px",
    margin: "8px 0",
  },

  link: {
    color: "#3b82f6",
    textDecoration: "underline",
  },

  sectionTitle: {
    color: "#1f2937",
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 16px 0",
  },

  sectionItem: {
    color: "#374151",
    fontSize: "14px",
    lineHeight: "20px",
    margin: "8px 0",
  },
} as const;

export const sectionStyles = {
  info: {
    backgroundColor: "#fef3c7",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 0",
    borderLeft: "4px solid #f59e0b",
  },

  benefits: {
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 0",
  },

  warning: {
    backgroundColor: "#fef2f2",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 0",
    borderLeft: "4px solid #dc2626",
  },
} as const;

export const buttonStyles = {
  primary: emailStyles.button,

  danger: {
    ...emailStyles.button,
    backgroundColor: "#dc2626",
  },
} as const;

export const headingStyles = {
  default: emailStyles.h2,

  danger: {
    ...emailStyles.h2,
    color: "#dc2626",
  },
} as const;
