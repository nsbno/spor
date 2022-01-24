import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Stack,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import { ColorScheme } from "../color-scheme/ColorSchemeContext";
import { extendTheme } from "@chakra-ui/react";

interface SectionCardProps {
  title: string;
  text: string;
  icon: ReactElement;
  bgColor: string;
}

export const SectionCard = ({
  title,
  text,
  icon,

  bgColor,
}: SectionCardProps) => {
  return (
    <Box
      px={{ base: 3, md: 8 }}
      py={"5"}
      shadow={"sm"}
      border={"1px solid"}
      borderColor={"alias.darkGrey"}
      rounded={"lg"}
      backgroundColor="alias.white"
    >
      <Box
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={bgColor}
        mb={1}
      >
        {icon}
      </Box>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Box>
  );
};
