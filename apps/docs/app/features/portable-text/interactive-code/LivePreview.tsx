import { ColorModeProvider } from "@chakra-ui/react";
import { NightFill24Icon, SummerFill24Icon } from "@vygruppen/spor-icon-react";
import { Box, BoxProps, IconButton } from "@vygruppen/spor-react";
import { useState } from "react";
import { LivePreview as ReactLivePreview } from "react-live";

export const LivePreview = (props: BoxProps) => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <ColorModeProvider value={isDarkMode ? "dark" : "light"}>
      <Box
        borderRadius="sm"
        border="sm"
        borderColor="osloGrey"
        backgroundColor={isDarkMode ? "darkGrey" : "white"}
        color={isDarkMode ? "white" : "darkGrey"}
        transition="all .1s ease-out"
        padding={4}
        paddingRight={8}
        position="relative"
        {...props}
      >
        <Box position="absolute" top={2} right={2} zIndex="popover">
          <IconButton
            size="sm"
            variant="tertiary"
            onClick={() => setDarkMode((d) => !d)}
            icon={isDarkMode ? <SummerFill24Icon /> : <NightFill24Icon />}
            aria-label={isDarkMode ? "Dark mode" : "Light mode"}
          />
        </Box>
        {/** @ts-ignore Bad typing in React Live */}
        <ReactLivePreview Component={Box} width="100%" />
      </Box>
    </ColorModeProvider>
  );
};
