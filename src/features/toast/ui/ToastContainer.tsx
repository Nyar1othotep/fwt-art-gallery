import cn from "classnames/bind";
import React, { useCallback, useContext } from "react";
import { createPortal } from "react-dom";

import { ThemeContext } from "@/features/theme";
import { useAppDispatch, useAppSelector } from "@/shared/lib/reduxHooks";
import { Toast } from "@/shared/ui/Toast";

import { removeToast, selectToasts } from "../model/toastSlice";

import styles from "./ToastContainer.module.scss";

const cx = cn.bind(styles);

const ToastContainer: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const toasts = useAppSelector(selectToasts);
  const dispatch = useAppDispatch();
  const isToasts = toasts.length !== 0;

  const handleClose = useCallback(
    (id: string) => () => {
      dispatch(removeToast(id));
    },
    [],
  );

  return createPortal(
    isToasts && (
      <div className={cx("toast-container")}>
        <div className={cx("toast-container__list")}>
          {toasts.map(({ id, status, message, duration }) => (
            <Toast
              key={id}
              theme={theme}
              duration={duration}
              onClose={handleClose(id)}
            >
              {`${status}: ${message}`}
            </Toast>
          ))}
        </div>
      </div>
    ),
    document.body,
  );
};

export default ToastContainer;
