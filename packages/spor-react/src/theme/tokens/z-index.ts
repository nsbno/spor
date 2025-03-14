import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const zIndex = defineTokens.zIndex({
  hide: { value: tokens.depth["z-index"].hide },
  auto: { value: "auto" },
  base: { value: tokens.depth["z-index"].base },
  docked: { value: tokens.depth["z-index"].docked },
  dropdown: { value: tokens.depth["z-index"].dropdown },
  sticky: { value: tokens.depth["z-index"].sticky },
  banner: { value: tokens.depth["z-index"].banner },
  overlay: { value: tokens.depth["z-index"].overlay },
  modal: { value: tokens.depth["z-index"].modal },
  popover: { value: tokens.depth["z-index"].popover },
  skipLink: { value: tokens.depth["z-index"].skipLink },
  toast: { value: tokens.depth["z-index"].toast },
});
