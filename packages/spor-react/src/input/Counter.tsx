import {
  chakra,
  useColorModeValue,
  useControllableState,
} from "@chakra-ui/react";
import React from "react";
import {
  Box,
  BoxProps,
  Flex,
  IconButton,
  createTexts,
  useTranslation,
} from "..";
import { focusVisible } from "../theme/utils/focus-utils";

type CounterProps = {
  /** The name of the input field */
  name?: string;
  /** The current value */
  value?: number;
  /** A default value, if uncontrolled */
  defaultValue?: number;
  /** Callback for when the value changes */
  onChange?: (value: number) => void;
  /** Optional minimum value. Defaults to 0 */
  minValue?: number;
  /** Optional maximum value. Defaults to 99 */
  maxValue?: number;
} & BoxProps;
/** A simple counter component
 *
 * Allows you to choose a given integer value, like for example the number of
 * adults on your journey.
 *
 * ```tsx
 * <Counter value={value} onChange={setValue} />
 * ```
 *
 * You can also set a minimum and/or maximum value:
 *
 * ```tsx
 * <Counter value={value} onChange={setValue} minValue={1} maxValue={10} />
 * ```
 */
export function Counter({
  name,
  value: valueProp,
  defaultValue = 1,
  onChange: onChangeProp,
  minValue = 0,
  maxValue = 99,
  ...boxProps
}: CounterProps) {
  const { t } = useTranslation();
  const [value, onChange] = useControllableState<number>({
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
  });
  const textColor = useColorModeValue("darkGrey", "white");
  const backgroundColor = useColorModeValue("white", "darkGrey");
  const focusedTextColor = useColorModeValue("white", "darkGrey");
  const focusedBackgroundColor = useColorModeValue("darkTeal", "white");

  return (
    <Flex alignItems="center" {...boxProps}>
      <VerySmallButton
        icon={<SubtractIcon color="white" />}
        aria-label={t(texts.decrementButtonAriaLabel)}
        onClick={() => onChange(value - 1)}
        visibility={value <= minValue ? "hidden" : "visible"}
      />
      <chakra.input
        type="number"
        name={name}
        fontSize="sm"
        width="2ch"
        marginX={2}
        borderRadius="xs"
        textAlign="center"
        value={value}
        backgroundColor={backgroundColor}
        color={textColor}
        _focus={{
          outline: "none",
          backgroundColor: focusedBackgroundColor,
          color: focusedTextColor,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const numericInput = Number(e.target.value);
          if (Number.isNaN(numericInput)) {
            return;
          }
          onChange(numericInput);
        }}
      />
      <VerySmallButton
        icon={<AddIcon color="white" />}
        aria-label={t(texts.incrementButtonAriaLabel)}
        onClick={() => onChange(value + 1)}
        visibility={value >= maxValue ? "hidden" : "visible"}
      />
    </Flex>
  );
}

type VerySmallButtonProps = {
  /** The icon to render */
  icon: React.ReactElement;
  /** Accessible label for the icon */
  "aria-label": string;
  /** Callback for when the button is clicked */
  onClick: () => void;
  /** Whether or not the button is hidden */
  visibility?: "visible" | "hidden";
};
/** Internal override for extra small icon buttons */
const VerySmallButton = (props: VerySmallButtonProps) => {
  return (
    <IconButton
      variant="primary"
      size="xs"
      minWidth="24px"
      minHeight="24px"
      {...focusVisible({
        notFocus: { boxShadow: "none" },
        focus: {
          boxShadow:
            "inset 0 0 0 2px var(--spor-colors-pine), inset 0 0 0 3px white",
        },
      })}
      {...props}
    />
  );
};

const SubtractIcon = (props: BoxProps) => (
  <Box
    as="svg"
    viewBox="0 0 30 30"
    width="24"
    height="24"
    stroke="currentColor"
    {...props}
  >
    <line
      x1="9"
      y1="15"
      x2="21"
      y2="15"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Box>
);

const AddIcon = (props: BoxProps) => (
  <Box
    as="svg"
    viewBox="0 0 30 30"
    width="24"
    height="24"
    stroke="currentColor"
    {...props}
  >
    <line
      x1="9"
      y1="15"
      x2="21"
      y2="15"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="15"
      y1="9"
      x2="15"
      y2="21"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Box>
);

const texts = createTexts({
  decrementButtonAriaLabel: {
    nb: "Trekk fra 1",
    en: "Subtract 1",
    nn: "Trekk frå 1",
    sv: "Subtrahera 1",
  },
  incrementButtonAriaLabel: {
    nb: "Legg til 1",
    en: "Add 1",
    nn: "Legg til 1",
    sv: "Lägg till 1",
  },
});
