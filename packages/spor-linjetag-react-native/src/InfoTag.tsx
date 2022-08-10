import { Box } from "@vygruppen/spor-layout-react-native";
import React from "react";
import { LineTagIcon } from "./LineTagIcon";
import { LineTagText } from "./LineTagText";
import type { TagProps } from "./types";

export const InfoTag = ({ variant, size, title, children }: TagProps) => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <LineTagIcon
        variant={variant}
        size={size}
        style={{ borderRadius: tagRadii[size] }}
        mr={marginRights[size]}
        p={1}
      />
      {children && <LineTagText title={title}>{children}</LineTagText>}
    </Box>
  );
};

const tagRadii = { sm: 9, md: 12, lg: 12 } as const;
const marginRights = { sm: 1, md: 1.5, lg: 2 } as const;
