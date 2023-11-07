import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
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
    to: "/",
    title: "Jean-Honore Fragonard",
    year: "1732 - 1806",
    image: {
      _id: "dwdyu23vdbwudvwbh",
      src: "/images/64e5d1f4af5d7f5991789c57/image.webp",
      src2x: "/images/64e5d1f4af5d7f5991789c57/image2x.jpg",
      webp: "/images/64e5d1f4af5d7f5991789c57/image.webp",
      webp2x: "/images/64e5d1f4af5d7f5991789c57/image2x.webp",
      original: "/images/64e5d1f4af5d7f5991789c57/image.webp",
    },
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
