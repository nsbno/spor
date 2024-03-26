import { Box, useColorModeValue } from "@vygruppen/spor-react";

export const SkipToContent = () => {
  const backgroundColor = useColorModeValue(
    "bg.default.dark",
    "bg.default.light",
  );
  const textColor = useColorModeValue(
    "text.default.dark",
    "text.default.light",
  );
  return (
    <Box
      as="a"
      href="#content"
      position="fixed"
      zIndex="banner"
      outline="none"
      top="0"
      left="0"
      right="0"
      padding={2}
      backgroundColor={backgroundColor}
      color={textColor}
      borderBottomRadius="sm"
      minWidth="40ch"
      boxShadow="md"
      textAlign="center"
      width="fit-content"
      marginX="auto"
      transform="translateY(-100%)"
      _focusVisible={{
        transform: "none",
        opacity: 1,
        outline: "4px solid",
        outlineColor: "burntYellow",
      }}
    >
      Skip to content
    </Box>
  );
};
