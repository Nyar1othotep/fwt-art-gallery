import React from "react";

import { Link } from "@/shared/ui/Link";

import { ReactComponent as Icon } from "../assets/logo.svg";

interface IHeaderLogo {
  className?: string;
  theme?: string;
}

const HeaderLogo: React.FC<IHeaderLogo> = ({ className = "", theme }) => {
  return (
    <Link to="/" className={className} theme={theme}>
      <Icon />
    </Link>
  );
};

export default HeaderLogo;
