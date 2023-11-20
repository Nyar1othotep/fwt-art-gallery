import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Login, Register } from "@/features/auth";
import { ArtistProfile } from "@/pages/ArtistProfile";
import { MainPage } from "@/pages/Main";

import BaseLayout from "./BaseLayout";
import AuthGuard from "./guard/AuthGuard";

const authChildrens = [
  {
    path: "login",
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: "register",
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    ),
  },
];

export const routing = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <MainPage />,
          children: authChildrens,
        },
        {
          path: "/artist/:artistId/",
          element: <ArtistProfile />,
          children: authChildrens,
        },
      ],
    },
  ]);
