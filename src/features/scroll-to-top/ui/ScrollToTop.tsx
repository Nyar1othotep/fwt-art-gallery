import cn from "classnames/bind";
import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { ReactComponent as IconArrow } from "@/shared/assets/arrow_icon.svg";
import { Button } from "@/shared/ui/Button";

import { useScrollToTop } from "../lib/useScrollToTop";

import styles from "./ScrollToTop.module.scss";

const cx = cn.bind(styles);

const ScrollToTop: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isShowButton = useScrollToTop();

  const handleScrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <div className={cx("scroll-to-top")}>
      {isShowButton && (
        <Button
          className={cx("scroll-to-top__btn")}
          theme={theme}
          variant="back-to-top"
          onClick={handleScrollToTop}
        >
          <IconArrow />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
