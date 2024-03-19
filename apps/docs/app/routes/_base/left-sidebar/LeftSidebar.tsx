import { Box, useColorModeValue } from "@vygruppen/spor-react";
import { SearchableContentMenu } from "~/routes/_base/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  const borderColor = useColorModeValue("lightGrey", "night");
  return (
    <Box
      display={["none", null, null, "block"]}
      as="nav"
      aria-label="content"
      minWidth="18rem"
      paddingX={1.5}
      paddingY={2}
      borderRight="9px solid"
      borderRightColor={borderColor}
    >
      <SearchableContentMenu />
    </Box>
  );
};
