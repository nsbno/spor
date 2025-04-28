import { ClientOnly } from "@chakra-ui/react";
import {
  Brand,
  ColorMode,
  Tabs,
  TabsList,
  TabsTrigger,
  useColorMode,
} from "@vygruppen/spor-react";

export const LightmodeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <ClientOnly>
      <Tabs
        variant="accent"
        size="md"
        value={String(colorMode)}
        onValueChange={(v) => setColorMode(v.value as ColorMode)}
      >
        <TabsList onChange={(v) => console.log(v)}>
          <TabsTrigger value="light">Light</TabsTrigger>

          <TabsTrigger value="dark">Dark</TabsTrigger>
        </TabsList>
      </Tabs>
    </ClientOnly>
  );
};
