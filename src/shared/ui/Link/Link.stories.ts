import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
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
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    to: "/path",
    theme: "light",
    children: "Link text",
  },
};

export default meta;
