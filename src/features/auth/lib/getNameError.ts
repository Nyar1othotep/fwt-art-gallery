export const getNameError = (errorMessage: string) =>
  errorMessage.includes("password") ? "password" : "email";
