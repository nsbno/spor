import { defineStyleConfig } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/system";
import { cssVar, getColor, mode } from "@chakra-ui/theme-tools";

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const config = defineStyleConfig({
  baseStyle: (props) => {
    const defaultStartColor = mode("blackAlpha.300", "whiteAlpha.300")(props);
    const defaultEndColor = mode("blackAlpha.100", "whiteAlpha.100")(props);

    const {
      startColor = defaultStartColor,
      endColor = defaultEndColor,
      speed,
      theme,
    } = props;

    const start = getColor(theme, startColor);
    const end = getColor(theme, endColor);

    return {
      [$startColor.variable]: start,
      [$endColor.variable]: end,
      opacity: 1,
      borderRadius: "xs",
      borderColor: start,
      background: end,
      animation: `${speed}s linear infinite alternate ${fade(start, end)}`,
    };
  },
});
export default config;
