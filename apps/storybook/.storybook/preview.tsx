import type { Preview } from "@storybook/react";
import {
  Box,
  ColorModeButton,
  SporProvider,
  themes,
} from "@vygruppen/spor-react";

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
        <Box position="fixed" top={2} right={2} zIndex="overlay">
          <ColorModeButton />
        </Box>
        <Story />
      </SporProvider>
    ),
  ],
};

export default preview;
