import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "@/features/auth";
import { ArtistsList } from "@/widgets/ArtistsList";

const MainPage: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const [filters] = useState({ perPage: 6 });

  return (
    <>
      <ArtistsList isAuth={isAuth} filters={filters} />
      <Outlet />
    </>
  );
};

export default MainPage;
