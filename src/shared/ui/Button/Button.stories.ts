import type { Meta, StoryObj } from "@storybook/react";

// import { ReactComponent as MockIcon } from "../../assets/delete_icon.svg";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      type: "string",
      description: "Button variant",
      defaultValue: "default",
      options: ["default", "text", "menu", "icon", "back-to-top"],
      control: {
        type: "radio",
      },
    },
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
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    theme: "light",
    children: "Default",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    theme: "light",
    children: "Text",
  },
};

export const Menu: Story = {
  args: {
    variant: "menu",
    theme: "light",
    children: "svg",
  },
};

export default meta;
