import React from "react";
import type { Preview } from "@storybook/react";
import { Theme } from "@radix-ui/themes";
import "../src/styles/initialize";
import { MainContainer } from "../src/layouts/PageLayout/MainContainer";

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
        <MainContainer>
          <Story />
        </MainContainer>
      </Theme>
    ),
  ],
};

export default preview;
