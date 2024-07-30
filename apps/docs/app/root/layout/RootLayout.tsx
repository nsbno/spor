import { Flex, useColorMode } from "@chakra-ui/react";
import { SiteHeader } from "./SiteHeader";
import { useEffect, useState } from "react";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout = ({ children }: BaseLayoutProps) => {
  const [background, setBackground] = useState("light");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setBackground(colorMode);
  }, [colorMode]);

  const backgroundColor =
    background === "light" ? "bg.default.light" : "bg.default.dark";

  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      backgroundColor={backgroundColor}
      fontFamily="Vy Sans"
      position="relative"
    >
      <SiteHeader />
      <Flex flex={1} flexDirection="column" width={"100%"}>
        {children}
      </Flex>
    </Flex>
  );
};
