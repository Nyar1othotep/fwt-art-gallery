import cn from "classnames/bind";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconBack } from "@/shared/assets/arrow_icon.svg";
import { routeHome } from "@/shared/helpers/routes";
import { Button } from "@/shared/ui/Button";

import styles from "./Page.module.scss";

const cx = cn.bind(styles);

const ErrorPage: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={cx("error-page", `error-page--${theme}`)}>
      <div className={cx("error-page__container")}>
        <div className={cx("error-page__content")}>
          <div className={cx("error-page__message")}>
            Oops... Something went wrong. <br /> Please return to the page and
            try again:
          </div>
          <Button theme={theme} variant="text" onClick={routeHome(navigate)}>
            <IconBack className={cx("error-page__icon")} /> Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
