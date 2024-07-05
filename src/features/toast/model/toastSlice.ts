import { createSlice } from "@reduxjs/toolkit";

import { IToast } from "./types";

const initialState = {
  toasts: [] as IToast[],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    enqueueToast: (state, action) => {
      const { meta, payload } = action.payload;

      state.toasts.push({
        id: meta.requestId,
        status: payload.status,
        message: payload.data.message,
        duration: 3000,
      });
    },
    removeToast: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload,
      );
    },
  },
});

export const { enqueueToast, removeToast } = toastSlice.actions;

export const selectToasts = (state: RootState) => state.toast.toasts;

export default toastSlice.reducer;
