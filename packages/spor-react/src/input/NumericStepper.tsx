import {
  chakra,
  useColorModeValue,
  useControllableState,
  useFormControl,
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
import { getBoxShadowString } from "../theme/utils/box-shadow-utils";
import { focusVisible } from "../theme/utils/focus-utils";

type NumericStepperProps = {
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
  /** Whether the stepper is disabled or not */
  isDisabled?: boolean;
} & BoxProps;
/** A simple stepper component for integer values
 *
 * Allows you to choose a given integer value, like for example the number of
 * adults on your journey.
 *
 * ```tsx
 * <NumericStepper value={value} onChange={setValue} />
 * ```
 *
 * You can also set a minimum and/or maximum value:
 *
 * ```tsx
 * <NumericStepper value={value} onChange={setValue} minValue={1} maxValue={10} />
 * ```
 *
 * You can use the NumericStepper inside of a FormControl component to get IDs etc linked up automatically:
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Number of adults</FormLabel>
 *   <NumericStepper />
 * </FormControl>
 * ```
 */
export function NumericStepper({
  name: nameProp,
  id: idProp,
  value: valueProp,
  defaultValue = 1,
  onChange: onChangeProp,
  minValue = 0,
  maxValue = 99,
  isDisabled,
  ...boxProps
}: NumericStepperProps) {
  const { t } = useTranslation();
  const [value, onChange] = useControllableState<number>({
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
  });
  const formControlProps = useFormControl({ id: idProp, isDisabled });
  const textColor = useColorModeValue("darkGrey", "white");
  const backgroundColor = useColorModeValue("white", "darkGrey");
  const focusColor = useColorModeValue("greenHaze", "azure");

  return (
    <Flex alignItems="center" {...boxProps}>
      <VerySmallButton
        icon={<SubtractIcon color="white" />}
        aria-label={t(texts.decrementButtonAriaLabel)}
        onClick={() => onChange(value - 1)}
        visibility={value <= minValue ? "hidden" : "visible"}
        isDisabled={formControlProps.disabled}
      />
      <chakra.input
        type="number"
        min={minValue}
        max={maxValue}
        name={nameProp}
        value={value}
        {...formControlProps}
        fontSize="sm"
        fontWeight="bold"
        width="3ch"
        marginX={1}
        paddingX={1}
        borderRadius="xs"
        textAlign="center"
        backgroundColor={backgroundColor}
        color={textColor}
        transition="box-shadow .1s ease-out"
        visibility={value === 0 ? "hidden" : "visible"}
        aria-live="assertive"
        aria-label={value.toString()}
        _hover={{
          boxShadow: getBoxShadowString({
            borderColor: "currentColor",
            borderWidth: 1,
          }),
          _disabled: {
            boxShadow: "none",
          },
        }}
        _disabled={{
          opacity: 0.5,
        }}
        _focus={{
          outline: "none",
          boxShadow: getBoxShadowString({
            borderColor: focusColor,
            borderWidth: 1,
          }),
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
        isDisabled={formControlProps.disabled}
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
  /** Whether or not the button is disabled */
  isDisabled?: boolean;
};
/** Internal override for extra small icon buttons */
const VerySmallButton = (props: VerySmallButtonProps) => {
  return (
    <IconButton
      variant="primary"
      size="xs"
      minWidth="24px"
      minHeight="24px"
      sx={focusVisible({
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
