import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  decorators: [withRouter],
  argTypes: {
    theme: {
      type: "string",
      description: "App theme",
      defaultValue: "light",
      options: ["light", "dark"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Jean-Honore Fragonard",
    year: "1732 - 1806",
    image: "/images/mock-image.png",
    theme: "light",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
          overflow: "hidden",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
