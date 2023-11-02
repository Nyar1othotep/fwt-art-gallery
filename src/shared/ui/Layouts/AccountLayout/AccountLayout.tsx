import cn from "classnames/bind";
import React, { HTMLAttributes, memo } from "react";

import { Link } from "../../Link";

import styles from "./AccountLayout.module.scss";

const cx = cn.bind(styles);

interface IAccountLayout extends HTMLAttributes<HTMLDivElement> {
  isAuth: boolean;
  theme?: string;
}

const AccountLayout: React.FC<IAccountLayout> = memo(
  ({ className, isAuth, theme = "light", ...props }) => {
    return (
      <div className={cx(className, "account-layout")} {...props}>
        {isAuth ? (
          <Link theme={theme} to="/">
            Log out
          </Link>
        ) : (
          <>
            <Link theme={theme} to="/">
              Log in
            </Link>
            <Link theme={theme} to="/">
              Sign up
            </Link>
          </>
        )}
      </div>
    );
  },
);

export default AccountLayout;
