import { useTranslation } from "@vygruppen/spor-i18n-react";
import { Box } from "@vygruppen/spor-layout-react-native";
import * as React from "react";
import { Pressable } from "react-native";

type Props = {
  onClose: () => void;
};

export const DrawerHandle = ({ onClose }: Props) => {
  const { t } = useTranslation();
  return (
    <Box alignItems="center" paddingVertical={2} flex={1}>
      <Pressable
        onPress={onClose}
        accessibilityLabel={t(texts.close)}
        hitSlop={5}
      >
        <Box backgroundColor="steel" borderRadius="xs" height={6} width={42} />
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
