import cn from "classnames/bind";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ThemeContext } from "@/features/theme";
import { Modal } from "@/shared/ui/Modal";

import { Login } from "../Login";

import styles from "./LoginModal.module.scss";

const cx = cn.bind(styles);

const LoginModal: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isFromHome = !!location.state;

  useEffect(() => {
    setIsShow(true);
  }, [isFromHome]);

  const handleClose = () => {
    setIsShow(false);
    navigate(-1);
  };

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
        <Login />
      </div>
    </Modal>
  );
};

export default LoginModal;
