import { IAxiosBaseQueryError } from "./types";

export const isAxiosBaseQueryError = (
  error: unknown,
): error is IAxiosBaseQueryError =>
  !!error && typeof error === "object" && "status" in error;
