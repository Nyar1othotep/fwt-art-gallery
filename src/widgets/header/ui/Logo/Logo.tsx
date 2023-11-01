import React from "react";

import { Link } from "@/shared/ui/Link";

import { ReactComponent as Icon } from "../assets/logo.svg";

interface ILogo {
  className?: string;
  theme?: string;
}

const Logo: React.FC<ILogo> = ({ className = "", theme }) => {
  return (
    <Link to="/" className={className} theme={theme}>
      <Icon />
    </Link>
  );
};

export default Logo;
