import { darkTheme } from "./theme/darkTheme";
import { lightTheme } from "./theme/lightTheme";
import { keys } from "./utility";

/**
 * Example:
 *
 * --- Output looks like this ---
 * {
 *  colors: {
 *    semantics: {
 *      colorAlarm: {
 *        value: {
 *          _light: lightTheme[colorAlarm]
 *          _dark: darkTheme[colorAlarm]
 *        }
 *      }
 *      colorInfo: {
 *        value: {
 *          _light: lightTheme[colorInfo]
 *          _dark: darkTheme[colorInfo]
 *        }
 *      }
 *      ...
 *    }
 *  }
 * }
 * ---------------------------------
 *
 * Docs: https://chakra-ui.com/docs/theming/semantic-tokens
 */
export const semanticTokens = {
  colors: {
    semantics: Object.fromEntries(
      keys(lightTheme).map((key) => [
        [key],
        { value: { _light: lightTheme[key], _dark: darkTheme[key] } },
      ]),
    ),
  },
};
