import { AxiosBaseQueryError } from "@/shared/api";

export const getNameError = (error: AxiosBaseQueryError) => {
  if ("data" in error) {
    return error.data.message.includes("password") ? "password" : "email";
  }

  return "root";
};
