import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Card } from "shared/ui/Card";
import { GridLayout } from "shared/ui/Layouts/GridLayout";

import baseLayout from "./baseLayout";

export const routing = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: (
            <GridLayout>
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
            </GridLayout>
          ),
        },
      ],
    },
  ]);
