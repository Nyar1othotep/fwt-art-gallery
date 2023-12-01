import cn from "classnames/bind";
import React, { HTMLAttributes, useContext } from "react";
import { useLocation } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ThemeContext } from "@/features/theme";
import { Link } from "@/shared/ui/Link";

import styles from "./HeaderAccount.module.scss";

const cx = cn.bind(styles);

interface IHeaderAccount extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

const HeaderAccount: React.FC<IHeaderAccount> = ({
  className,
  onClose,
  ...props
}) => {
  const { isAuth, onLogout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div className={cx(className, "account-header")} {...props}>
      {isAuth ? (
        <Link to={location.pathname} theme={theme} onClick={onLogout}>
          Log out
        </Link>
      ) : (
        <>
          <Link to={{ search: "login=true" }} theme={theme} onClick={onClose}>
            Log in
          </Link>
          <Link
            to={{ search: "register=true" }}
            theme={theme}
            onClick={onClose}
          >
            Sign up
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderAccount;
