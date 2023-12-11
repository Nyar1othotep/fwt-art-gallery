import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

import { enqueueToast } from "@/features/toast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action) && action.payload.status !== 409) {
      api.dispatch(enqueueToast(action));
    }

    return next(action);
  };
