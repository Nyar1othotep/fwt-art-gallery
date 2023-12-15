import cn from "classnames/bind";
import React, { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

import { routeBack } from "@/shared/helpers/routes";
import { useBoolean } from "@/shared/lib/useBoolean";
import { Link } from "@/shared/ui/Link";
import { Modal } from "@/shared/ui/Modal";

import { authContent } from "../../config";
import { TAuthVariant } from "../../model/types";

import styles from "./AuthModal.module.scss";

const cx = cn.bind(styles);

interface IAuthModal extends HTMLAttributes<HTMLElement> {
  theme?: string;
  variant: TAuthVariant;
}

const AuthModal: React.FC<IAuthModal> = ({ theme, variant, children }) => {
  const navigate = useNavigate();
  const [isModal, { off: handleModalClose }] = useBoolean(true);

  const { heading, message, linkText, to } = authContent[variant];

  return (
    <Modal
      className={cx("auth-modal")}
      theme={theme}
      isShow={isModal}
      onClose={handleModalClose}
      onExited={routeBack(navigate)}
    >
      <div className={cx("auth-modal__inner")}>
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
