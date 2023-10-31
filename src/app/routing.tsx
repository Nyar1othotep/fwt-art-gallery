import React from "react";

import { createBrowserRouter } from "react-router-dom";

import baseLayout from "./baseLayout";
import { Link } from "@/shared/ui/Link";

export const routing = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: (
            <div>
              <Link to="/some">Link</Link>
            </div>
          ),
        },
      ],
    },
  ]);
