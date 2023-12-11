import { combineReducers } from "@reduxjs/toolkit";

import { toastReducer } from "@/features/toast";
import { baseApi } from "@/shared/api";

export const rootReducers = combineReducers({
  toast: toastReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
