import { ActionError, errors } from "./errors";

export const getErrorMessage = (error: unknown) => {
  if (error instanceof ActionError) return error.message;
  if (typeof error === "string") return error;

  return errors.GENERAL.SERVER_ERROR;
};
