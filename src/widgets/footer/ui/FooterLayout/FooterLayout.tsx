import cn from "classnames/bind";
import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";

import { ReactComponent as IconFacebook } from "../assets/facebook_icon.svg";
import { ReactComponent as IconInsta } from "../assets/instagram_icon.svg";
import { ReactComponent as IconVK } from "../assets/vk_icon.svg";

import styles from "./FooterLayout.module.scss";

const cx = cn.bind(styles);

const FooterLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={cx("footer", `footer--${theme}`)}>
      <div className={cx("footer__container")}>
        <div className={cx("footer__content")}>
          <div className={cx("footer__inner-content", "inner-content")}>
            <p className={cx("inner-content__descr")}>
              Проект реализован в рамках стажировки <br /> для
              Frontend-разработчиков от компании{" "}
              <Link
                className={cx("inner-content__link")}
                to="https://framework.team/"
                theme={theme}
              >
                Framework Team
              </Link>
            </p>
            <p
              className={cx(
                "inner-content__copy",
                `inner-content__copy--${theme}`,
              )}
            >
              Минин Максим, 2023
            </p>
          </div>
          <div className={cx("footer__social", "social-footer")}>
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
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
