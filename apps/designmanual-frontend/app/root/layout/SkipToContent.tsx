import { Box } from "@vygruppen/spor-react";

export const SkipToContent = () => {
  return (
    <Box
      asChild
      position="fixed"
      zIndex="banner"
      outline="none"
      top="0"
      left="0"
      right="0"
      padding={2}
      backgroundColor="bg"
      color="text"
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
      }}
    >
      <a href="#content">Skip to content</a>
    </Box>
  );
};
