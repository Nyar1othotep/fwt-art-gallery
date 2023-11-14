export function isFetchBaseQueryError(error: unknown): error is {
  data: {
    statusCode: number;
    message: string;
    error: string;
  };
} {
  return (error as any).data !== undefined;
}
