import cn from "classnames/bind";
import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";

import { FooterSocial } from "../FooterSocial";

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
          <FooterSocial className="footer__social" />
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
