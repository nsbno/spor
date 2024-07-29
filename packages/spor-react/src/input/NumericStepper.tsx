import {
  chakra,
  useControllableState,
  useFormControl,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useRef } from "react";
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
  /** Name added to the aria-label of subtract and add buttons. */
  ariaLabelContext?: { singular: string; plural: string };
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
  ariaLabelContext = { singular: "", plural: "" },
  ...boxProps
}: NumericStepperProps) {
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("NumericStepper", {});
  const [value, onChange] = useControllableState<number>({
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
  });
  const formControlProps = useFormControl({ id: idProp, isDisabled });
  const clampedStepSize = Math.max(Math.min(stepSize, 10), 1);

  const focusOnAddButton = () => {
    addButtonRef.current?.focus();
  };

  return (
    <Flex __css={styles.container} {...boxProps}>
      <VerySmallButton
        icon={<SubtractIcon stepLabel={clampedStepSize} />}
        aria-label={t(
          texts.decrementButtonAriaLabel(
            clampedStepSize,
            stepSize == 1 ? ariaLabelContext.singular : ariaLabelContext.plural,
          ),
        )}
        onClick={() => {
          onChange(Math.max(value - clampedStepSize, minValue));
          if (Math.max(value - clampedStepSize, minValue) <= minValue) {
            focusOnAddButton();
          }
        }}
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
          aria-label={
            ariaLabelContext.plural !== ""
              ? t(texts.currentNumberAriaLabel(ariaLabelContext.plural))
              : ""
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const numericInput = Number(e.target.value);
            if (Number.isNaN(numericInput)) {
              return;
            }
            onChange(Math.max(Math.min(numericInput, maxValue), minValue));
            if (
              !showZero &&
              Math.max(Math.min(numericInput, maxValue), minValue) === 0
            ) {
              focusOnAddButton();
            }
          }}
        />
      ) : (
        <chakra.text
          sx={styles.text}
          visibility={!showZero && value === 0 ? "hidden" : "visible"}
          aria-live="assertive"
          aria-label={
            ariaLabelContext.plural !== ""
              ? t(texts.currentNumberAriaLabel(ariaLabelContext.plural))
              : ""
          }
        >
          {value}
        </chakra.text>
      )}
      <VerySmallButton
        ref={addButtonRef}
        icon={<AddIcon stepLabel={clampedStepSize} />}
        aria-label={t(
          texts.incrementButtonAriaLabel(
            clampedStepSize,
            stepSize == 1 ? ariaLabelContext.singular : ariaLabelContext.plural,
          ),
        )}
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
const VerySmallButton = React.forwardRef((props: VerySmallButtonProps, ref) => {
  const styles = useMultiStyleConfig("NumericStepper", {});
  return (
    <IconButton
      variant="primary"
      size="xs"
      sx={styles.button}
      ref={ref}
      {...props}
    />
  );
});

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
  currentNumberAriaLabel(ariaContext) {
    return {
      nb: `Valgt antall ${ariaContext}`,
      en: `Chosen number of ${ariaContext}`,
      nn: `Valgt antall ${ariaContext}`,
      sv: `Valgt antall ${ariaContext}`,
    };
  },
  decrementButtonAriaLabel(stepSize, ariaContext) {
    return {
      nb: `Trekk fra ${stepSize} ${ariaContext}`,
      en: `Subtract ${stepSize} ${ariaContext}`,
      nn: `Trekk frå ${stepSize} ${ariaContext}`,
      sv: `Subtrahera ${stepSize} ${ariaContext}`,
    };
  },
  incrementButtonAriaLabel(stepSize, ariaContext) {
    return {
      nb: `Legg til ${stepSize} ${ariaContext}`,
      en: `Add ${stepSize} ${ariaContext}`,
      nn: `Legg til ${stepSize} ${ariaContext}`,
      sv: `Lägg till ${stepSize} ${ariaContext}`,
    };
  },
});
