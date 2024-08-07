import type { Preview } from "@storybook/react";

import "../src/shared/styles/base.scss";
import "../src/shared/styles/fonts.scss";
import "../src/shared/styles/colors.scss";
import "../src/shared/styles/mixins.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
