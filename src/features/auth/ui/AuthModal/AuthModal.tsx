import cn from "classnames/bind";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "@/shared/ui/Link";
import { Modal } from "@/shared/ui/Modal";

import { authContent } from "../../config";
import { TAuthVariant } from "../../model/types";

import styles from "./AuthModal.module.scss";

const cx = cn.bind(styles);

interface IAuthModal extends HTMLAttributes<HTMLElement> {
  theme?: string;
  isClose: boolean;
  variant: TAuthVariant;
}

const AuthModal: React.FC<IAuthModal> = ({
  theme,
  variant,
  isClose,
  children,
}) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (isClose) setIsShow(false);
  }, [isClose]);

  const handleClose = () => setIsShow(false);

  const handleExited = () => navigate(-1);

  const { heading, message, linkText, to } = authContent[variant];

  return (
    <Modal
      theme={theme}
      isShow={isShow}
      variant="default"
      onClose={handleClose}
      onExited={handleExited}
    >
      <div className={cx("auth-modal")}>
        <div className={cx("auth-modal__background-wrapper")}>
          <img
            className={cx("auth-modal__background")}
            src={`/images/${variant}-background.jpg`}
            alt="auth backgorund"
          />
        </div>
        <div
          className={cx(
            "auth-modal__content",
            `auth-modal__content--${variant}`,
          )}
        >
          <h1 className={cx("auth-modal__heading")}>{heading}</h1>
          <div className={cx("auth-modal__message")}>
            {message}
            <Link
              className={cx("auth-modal__message-link")}
              to={to}
              theme={theme}
            >
              {linkText}
            </Link>
          </div>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
