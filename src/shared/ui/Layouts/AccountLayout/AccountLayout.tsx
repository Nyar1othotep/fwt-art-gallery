import cn from "classnames/bind";
import React, { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";

import styles from "./AccountLayout.module.scss";

const cx = cn.bind(styles);

interface IAccountLayout extends HTMLAttributes<HTMLDivElement> {
  isAuth: boolean;
}

const AccountLayout: React.FC<IAccountLayout> = memo(
  ({ className, isAuth }) => {
    return (
      <div className={cx(className, "account-layout")}>
        {isAuth ? (
          <Link to="/">Log out</Link>
        ) : (
          <>
            <Link to="/">Log in</Link>
            <Link to="/">Sign up</Link>
          </>
        )}
      </div>
    );
  },
);

export default AccountLayout;
