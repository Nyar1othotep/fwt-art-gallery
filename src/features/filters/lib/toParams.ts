export const toParams = (object: Record<string, string>) =>
  new URLSearchParams(object).toString();
