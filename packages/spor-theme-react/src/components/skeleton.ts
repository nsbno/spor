import { defineStyleConfig } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/system";
import { getColor, mode } from "@chakra-ui/theme-tools";

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

const config = defineStyleConfig({
  baseStyle: (props) => {
    const defaultStartColor = mode("blackAlpha.200", "whiteAlpha.200")(props);
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
      opacity: 1,
      borderRadius: "xs",
      borderColor: start,
      background: end,
      animation: `${speed}s linear infinite alternate ${fade(start, end)}`,
    };
  },
});
export default config;
