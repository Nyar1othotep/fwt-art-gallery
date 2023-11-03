import cn from "classnames/bind";
import React, { HTMLAttributes, useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";

import { ReactComponent as IconFacebook } from "../assets/facebook_icon.svg";
import { ReactComponent as IconInsta } from "../assets/instagram_icon.svg";
import { ReactComponent as IconVK } from "../assets/vk_icon.svg";

import styles from "./FooterSocial.module.scss";

const cx = cn.bind(styles);

const FooterSocial: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx(className, "social-footer")}>
      <ul className={cx("social-footer__list")}>
        <li>
          <Link
            className={cx("social-footer__link")}
            to="https://www.facebook.com/"
            theme={theme}
          >
            <IconFacebook />
          </Link>
        </li>
        <li>
          <Link
            className={cx("social-footer__link")}
            to="https://vk.com/"
            theme={theme}
          >
            <IconVK />
          </Link>
        </li>
        <li>
          <Link
            className={cx("social-footer__link")}
            to="https://www.instagram.com/"
            theme={theme}
          >
            <IconInsta />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
