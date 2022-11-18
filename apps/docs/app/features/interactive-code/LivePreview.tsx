import { ColorModeProvider, Flex } from "@chakra-ui/react";
import {
  Box,
  BoxProps,
  FormControl,
  IconButton,
  NightFill24Icon,
  SummerFill24Icon,
} from "@vygruppen/spor-react";
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
        p={4}
        position="relative"
        {...props}
      >
        <FormControl position="absolute" top={2} right={2}>
          <Flex justifyContent="flex-end">
            <IconButton
              size="sm"
              variant="additional"
              onClick={() => setDarkMode((d) => !d)}
              icon={isDarkMode ? <SummerFill24Icon /> : <NightFill24Icon />}
              aria-label={isDarkMode ? "Dark mode" : "Light mode"}
            />
          </Flex>
        </FormControl>
        {/** @ts-ignore Bad typing in React Live */}
        <ReactLivePreview Component={Box} width="100%" />
      </Box>
    </ColorModeProvider>
  );
};
