import React from "react";

import { Layout } from "@/shared/ui/Layouts/Layout";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const baseLayout = <Layout headerSlot={<Header />} footerSlot={<Footer />} />;

export default baseLayout;
