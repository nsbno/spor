import * as React from "react";
import { Pressable } from "react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { useTranslation } from "@vygruppen/spor-i18n-react";

type Props = {
  onClose: () => void;
};

export const DrawerHandle = ({ onClose }: Props) => {
  const { t } = useTranslation();
  return (
    <Box alignItems="center" paddingVertical="sm" flex={1}>
      <Pressable
        onPress={onClose}
        accessibilityLabel={t(texts.close)}
        hitSlop={5}
      >
        <Box
          backgroundColor="steel"
          borderRadius="xs"
          height={6}
          width={42}
        ></Box>
      </Pressable>
    </Box>
  );
};

const texts = {
  close: {
    nb: "Lukk",
    sv: "Stäng",
    en: "Close",
  },
};
