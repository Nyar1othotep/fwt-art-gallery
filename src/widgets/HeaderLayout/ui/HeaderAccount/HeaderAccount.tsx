import cn from "classnames/bind";
import React, { HTMLAttributes, memo, useContext } from "react";
import { useLocation } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";

import styles from "./HeaderAccount.module.scss";

const cx = cn.bind(styles);

interface IHeaderAccount extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

const HeaderAccount: React.FC<IHeaderAccount> = memo(
  ({ className, onClose, ...props }) => {
    const { isAuth, onLogout } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);
    const location = useLocation();

    return (
      <div className={cx(className, "account-header")} {...props}>
        {isAuth ? (
          <Link to="/" theme={theme} onClick={onLogout}>
            Log out
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              state={{ from: location }}
              theme={theme}
              onClick={onClose}
            >
              Log in
            </Link>
            <Link to="/register" theme={theme} onClick={onClose}>
              Sign up
            </Link>
          </>
        )}
      </div>
    );
  },
);

export default HeaderAccount;
