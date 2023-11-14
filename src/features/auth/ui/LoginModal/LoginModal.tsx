import cn from "classnames/bind";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";
import { Modal } from "@/shared/ui/Modal";

import { useLoginMutation } from "../../api/authApi";
import { AuthContext } from "../../lib/AuthProvider";
import { useFingerprint } from "../../lib/fingerprint";
import { TAuthSchema } from "../../model/authSchema";
import { TRequestLoginBody } from "../../model/types";
import { AuthForm } from "../AuthForm";

import styles from "./LoginModal.module.scss";

const cx = cn.bind(styles);

const LoginModal: React.FC = () => {
  const fingerprint = useFingerprint();
  const { theme } = useContext(ThemeContext);
  const [isShow, setIsShow] = useState(false);
  const [login, { isSuccess, data, isError, error }] = useLoginMutation();
  const { setTokens } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isFromHome = !!location.state;

  const handleClose = () => {
    setIsShow(false);
    navigate(-1);
  };

  useEffect(() => {
    setIsShow(true);

    if (isSuccess && data) {
      setTokens(data);
      handleClose();
    }
  }, [isFromHome, isSuccess]);

  const onSubmit = useCallback(
    ({ email, password }: TAuthSchema) => {
      login({ username: email, password, fingerprint } as TRequestLoginBody);
    },
    [fingerprint],
  );

  return (
    <Modal
      theme={theme}
      variant="default"
      isShow={isShow}
      onClose={handleClose}
    >
      <div className={cx("login-modal")}>
        <img
          className={cx("login-modal__background")}
          src="/images/login-background.jpg"
          alt="auth backgorund"
        />
        <div className={cx("login-modal__content")}>
          <h1 className={cx("login-modal__heading")}>Welcome back</h1>
          <div className={cx("login-modal__message")}>
            If you don&apos;t have an account yet, please{" "}
            <Link
              className={cx("login-modal__message-link")}
              theme={theme}
              to="/register"
              state={{ background: location }}
            >
              sign up
            </Link>
          </div>
          <AuthForm
            className={cx("login-modal__form")}
            theme={theme}
            variant="login"
            isError={isError}
            error={error}
            onSubmitHandler={onSubmit}
          />
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
