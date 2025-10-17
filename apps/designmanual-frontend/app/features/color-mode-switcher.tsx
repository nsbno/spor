import { ClientOnly, IconButton, useColorMode } from "@vygruppen/spor-react";
import {
  NightOutline24Icon,
  SummerOutline24Icon,
} from "@vygruppen/spor-react/icons";

function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? (
    <NightOutline24Icon />
  ) : (
    <SummerOutline24Icon />
  );
}

export function ColorModeSwitcher() {
  const { toggleColorMode } = useColorMode();

  return (
    <ClientOnly>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="md"
        icon={<ColorModeIcon />}
      />
    </ClientOnly>
  );
}
