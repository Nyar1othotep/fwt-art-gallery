import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Register, useAuthModal } from "@/features/auth";
import { ToastContainer } from "@/features/toast";
import { ArtistProfile } from "@/pages/ArtistProfile";
import { ErrorPage } from "@/pages/Error";
import { MainPage } from "@/pages/Main";

import BaseLayout from "./BaseLayout";
import ErrorLayout from "./ErrorLayout";
import AuthGuard from "./guard/AuthGuard";

const App = () => {
  const { isLoginModal, isRegisterModal } = useAuthModal();

  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />} errorElement={<ErrorLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/artist/:artistId" element={<ArtistProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {isLoginModal && (
        <AuthGuard>
          <Login />
        </AuthGuard>
      )}
      {isRegisterModal && (
        <AuthGuard>
          <Register />
        </AuthGuard>
      )}
      <ToastContainer />
    </>
  );
};

export default App;
