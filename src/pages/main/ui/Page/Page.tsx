import React, { useState } from "react";

import { ArtistsList } from "@/widgets/ArtistsList";

const MainPage: React.FC = () => {
  const isAuth = false; // На будущее
  const [filters] = useState({ perPage: 6 });

  return <ArtistsList isAuth={isAuth} filters={filters} />;
};

export default MainPage;
