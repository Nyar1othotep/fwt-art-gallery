import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { ErrorPage } from "@/pages/Error";
import { Layout } from "@/shared/ui/Layouts/Layout";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const ErrorLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout
      theme={theme}
      headerSlot={<Header />}
      contentSlot={<ErrorPage />}
      footerSlot={<Footer />}
    />
  );
};

export default ErrorLayout;
