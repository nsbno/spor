import { ClientOnly, IconButton, useColorMode } from "@vygruppen/spor-react";
import { ThemeFill24Icon } from "@vygruppen/spor-react/icons";

export function ColorModeSwitcher() {
  const { toggleColorMode } = useColorMode();

  return (
    <ClientOnly>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="md"
        icon={<ThemeFill24Icon />}
      />
    </ClientOnly>
  );
}
