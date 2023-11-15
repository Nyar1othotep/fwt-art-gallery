import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Login, Register } from "@/features/auth";
import { MainPage } from "@/pages/main";

import BaseLayout from "./BaseLayout";

const authChildrens = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
      ],
    },
  ]);
