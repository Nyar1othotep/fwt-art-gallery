import { createApi } from "@reduxjs/toolkit/query/react";

import { API_URL } from "../config";

import { axiosBaseQuery } from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
  endpoints: () => ({}),
});
