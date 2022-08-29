import { Box } from "@vygruppen/spor-layout-react";
import React from "react";
import { LineTagIcon } from "./LineTagIcon";
import { LineTagText } from "./LineTagText";
import { variantStyling } from "./styling";
import type { TagProps } from "./types";

export const TravelTag = ({ variant, size, title, children }: TagProps) => {
  const styles = variantStyling[variant];
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      backgroundColor={styles.accentBackgroundColor}
      p={1}
      style={{
        borderRadius: containerRadii[size],
      }}
    >
      <LineTagIcon
        variant={variant}
        size={size}
        style={{ borderRadius: iconRadii[size] }}
        mr={marginRights[size]}
        p={0.5}
      />
      {children && <LineTagText title={title}>{children}</LineTagText>}
    </Box>
  );
};

const containerRadii = { sm: 9, md: 12, lg: 12 } as const;
const iconRadii = { sm: 6, md: 9, lg: 9 } as const;
const marginRights = { sm: 1, md: 1.5, lg: 1.5 } as const;