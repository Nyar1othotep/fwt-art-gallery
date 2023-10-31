import React from "react";

import { createBrowserRouter } from "react-router-dom";

import baseLayout from "./baseLayout";
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gridAutoRows: "max-content",
                gap: "32px",
              }}
            >
              <Card
                title="Jean-Honore Fragonard"
                year="1732 - 1806"
                image="/images/mock-image.png"
              />
              <Card
                title="Jean-Honore Fragonard"
                year="1732 - 1806"
                image="/images/mock-image.png"
              />
              <Card
                title="Jean-Honore Fragonard"
                year="1732 - 1806"
                image="/images/mock-image.png"
              />
              <Card
                title="Jean-Honore Fragonard"
                year="1732 - 1806"
                image="/images/mock-image.png"
              />
            </div>
          ),
        },
      ],
    },
  ]);
