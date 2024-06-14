import type { Preview } from "@storybook/react";
import "@radix-ui/themes/styles.css";
import "normalize.css";

import { Theme } from "@radix-ui/themes";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
