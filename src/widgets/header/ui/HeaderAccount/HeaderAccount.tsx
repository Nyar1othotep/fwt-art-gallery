import cn from "classnames/bind";
import React, { HTMLAttributes, memo, useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";

import styles from "./HeaderAccount.module.scss";

const cx = cn.bind(styles);

interface IHeaderAccount extends HTMLAttributes<HTMLDivElement> {
  isAuth: boolean;
}

const HeaderAccount: React.FC<IHeaderAccount> = memo(
  ({ className, isAuth, ...props }) => {
    const { theme } = useContext(ThemeContext);

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

export default HeaderAccount;
