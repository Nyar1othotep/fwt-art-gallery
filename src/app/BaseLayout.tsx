import React, { useContext } from "react";

import { ThemeContext } from "@/features/theme";
import { Layout } from "@/shared/ui/Layouts/Layout";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const BaseLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout theme={theme} headerSlot={<Header />} footerSlot={<Footer />} />
  );
};

export default BaseLayout;
