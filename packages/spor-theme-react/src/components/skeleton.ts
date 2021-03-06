import { keyframes } from "@chakra-ui/system";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColor, mode } from "@chakra-ui/theme-tools";

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

const baseStyle: SystemStyleFunction = (props) => {
  const defaultStartColor = mode(
    "palette.blackAlpha.200",
    "palette.whiteAlpha.200"
  )(props);
  const defaultEndColor = mode(
    "palette.blackAlpha.100",
    "palette.whiteAlpha.100"
  )(props);

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
};

export default {
  baseStyle,
};
