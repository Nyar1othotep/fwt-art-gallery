import { IAxiosBaseQueryError } from "./types";

export const isAxiosBaseQueryError = (
  error: unknown,
): error is IAxiosBaseQueryError =>
  typeof error === "object" && error != null && "status" in error;
