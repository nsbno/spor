import { PlatformConfig } from "style-dictionary/types";

/** Returns the base pixel font size,
 * as specified in `platform.options.basePxFontSize` of the platform
 * being processed. You might find that value in config.json.
 *
 * Defaults to 16px, which is the default value for web.
 **/
export const getBaseFontSize = ({
  options,
}: PlatformConfig | undefined = {}) => {
  return options?.basePxFontSize ?? 16;
};
