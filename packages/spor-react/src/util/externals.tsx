/** This file works as a proxy for all Chakra UI exports */
export {
  DarkMode,
  LightMode,
  Portal,
  defineStyleConfig,
  extendTheme,
  useBreakpointValue,
  useClipboard,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
  useControllableProp,
  useDisclosure,
  useMergeRefs,
  useOutsideClick,
  usePrefersReducedMotion,
  useTheme,
  useToken,
} from "@chakra-ui/react";
export type {
  CSSWithMultiValues,
  ComponentStyleConfig,
  PortalProps,
  UseClipboardOptions,
  UseDisclosureProps,
  UseOutsideClickProps,
} from "@chakra-ui/react";
import { useMediaQuery as useMediaQueryChakra } from "@chakra-ui/react";

/**
 * @deprecated useMediaQuery is deprecated. Use CSS only to determine the media query. - SSR is not supported and usage of useMediaQuery for rendering will cause hydration errors.
 */
export const useMediaQuery = useMediaQueryChakra;

export { useSize } from "@chakra-ui/react-use-size";
