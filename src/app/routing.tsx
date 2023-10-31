import React from "react";

import { createBrowserRouter } from "react-router-dom";

import baseLayout from "./baseLayout";
import image from "./image.png";
import { Card } from "@/shared/ui/Card";

export const routing = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: (
            <div style={{ maxWidth: "300px" }}>
              <Card
                title="Jean-Honore Fragonard"
                year="1732 - 1806"
                image={image}
              />
            </div>
          ),
        },
      ],
    },
  ]);
