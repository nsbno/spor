import type { Preview } from "@storybook/react";
import { SporProvider, themes } from "@vygruppen/spor-react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <SporProvider>
        <Story />
      </SporProvider>
    ),
  ],
};

export default preview;
