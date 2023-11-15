import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/features/auth";
import { MainPage } from "@/pages/main";

import BaseLayout from "./BaseLayout";

export const routing = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <MainPage />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
      ],
    },
  ]);
