import React, { useContext } from "react";

import { FiltersProvider } from "@/features/filters";
import { ThemeContext } from "@/features/theme";
import { Layout } from "@/shared/ui/Layouts/Layout";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const BaseLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FiltersProvider>
      <Layout theme={theme} headerSlot={<Header />} footerSlot={<Footer />} />
    </FiltersProvider>
  );
};

export default BaseLayout;
