import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "@/shared/api";

export const rootReducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
