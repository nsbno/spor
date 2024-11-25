import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import * as foundations from "./foundations";

export const config = defineConfig({
  theme: {
    ...foundations,
  },
});

export const system = createSystem(config);