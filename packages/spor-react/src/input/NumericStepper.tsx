import {
  chakra,
  useControllableState,
  useFormControl,
  useMultiStyleConfig,
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
  /** Whether to show input field or not */
  withInput?: boolean;
  /** The amount to increase/decrease when pressing +/- */
  stepSize?: number;
  /** Whether to show the number input when value is zero  */
  showZero?: boolean;
} & Omit<BoxProps, "onChange">;
/** A simple stepper component for integer values
 *
 * Allows you to choose a given integer value, like for example the number of
 * adults on your journey.
 *
 * ```tsx
 * <NumericStepper value={value} onChange={setValue} />
 * ```
 *
 * You can also set a minimum and/or maximum value and step size:
 *
 * ```tsx
 * <NumericStepper value={value} onChange={setValue} minValue={1} maxValue={10} stepSize={3} />
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
  withInput = true,
  stepSize = 1,
  showZero = false,
  ...boxProps
}: NumericStepperProps) {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("NumericStepper", {});
  const [value, onChange] = useControllableState<number>({
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
  });
  const formControlProps = useFormControl({ id: idProp, isDisabled });
  const clampedStepSize = Math.max(Math.min(stepSize, 10), 1);

  return (
    <Flex __css={styles.container} {...boxProps}>
      <VerySmallButton
        icon={<SubtractIcon stepLabel={clampedStepSize} />}
        aria-label={t(texts.decrementButtonAriaLabel(clampedStepSize))}
        onClick={() => onChange(Math.max(value - clampedStepSize, minValue))}
        visibility={value <= minValue ? "hidden" : "visible"}
        isDisabled={formControlProps.disabled}
        id={value <= minValue ? undefined : formControlProps.id}
      />
      {withInput ? (
        <chakra.input
          type="number"
          min={minValue}
          max={maxValue}
          name={nameProp}
          value={value}
          {...formControlProps}
          id={!showZero && value === 0 ? undefined : formControlProps.id}
          sx={styles.input}
          width={`${Math.max(value.toString().length + 1, 3)}ch`}
          visibility={!showZero && value === 0 ? "hidden" : "visible"}
          aria-live="assertive"
          aria-label={value.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const numericInput = Number(e.target.value);
            if (Number.isNaN(numericInput)) {
              return;
            }
            onChange(Math.max(Math.min(numericInput, maxValue), minValue));
          }}
        />
      ) : (
        <chakra.text
          sx={styles.text}
          visibility={!showZero && value === 0 ? "hidden" : "visible"}
          aria-label={value.toString()}
        >
          {value}
        </chakra.text>
      )}
      <VerySmallButton
        icon={<AddIcon stepLabel={clampedStepSize} />}
        aria-label={t(texts.incrementButtonAriaLabel(clampedStepSize))}
        onClick={() => onChange(Math.min(value + clampedStepSize, maxValue))}
        visibility={value >= maxValue ? "hidden" : "visible"}
        isDisabled={formControlProps.disabled}
        id={value >= maxValue ? undefined : formControlProps.id}
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
  /** The ID of the button */
  id?: string;
};
/** Internal override for extra small icon buttons */
const VerySmallButton = (props: VerySmallButtonProps) => {
  const styles = useMultiStyleConfig("NumericStepper", {});
  return (
    <IconButton variant="primary" size="xs" sx={styles.button} {...props} />
  );
};

type IconPropTypes = BoxProps & { stepLabel: number };

const SubtractIcon = ({ stepLabel, ...props }: IconPropTypes) => (
  <>
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
    {stepLabel > 1 && (
      <chakra.span paddingRight="1">{stepLabel.toString()}</chakra.span>
    )}
  </>
);

const AddIcon = ({ stepLabel, ...props }: IconPropTypes) => (
  <>
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

    {stepLabel > 1 && (
      <chakra.span paddingRight="1">{stepLabel.toString()}</chakra.span>
    )}
  </>
);

const texts = createTexts({
  decrementButtonAriaLabel(stepSize) {
    return {
      nb: `Trekk fra ${stepSize}`,
      en: `Subtract ${stepSize}`,
      nn: `Trekk frå ${stepSize}`,
      sv: `Subtrahera ${stepSize}`,
    };
  },
  incrementButtonAriaLabel(stepSize) {
    return {
      nb: `Legg til ${stepSize}`,
      en: `Add ${stepSize}`,
      nn: `Legg til ${stepSize}`,
      sv: `Lägg till ${stepSize}`,
    };
  },
});
