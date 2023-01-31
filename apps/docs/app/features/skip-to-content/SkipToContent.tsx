import { Box } from "@vygruppen/spor-react";

export const SkipToContent = () => {
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
      backgroundColor="greenHaze"
      color="white"
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
        boxShadow: "0 0 0 4px var(--spor-colors-burntYellow)",
      }}
    >
      Hopp til hovedinnhold
    </Box>
  );
};
