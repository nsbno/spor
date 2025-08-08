"use client";
import {
  chakra,
  Input,
  RecipeVariantProps,
  useControllableState,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { useRef } from "react";

import { BoxProps, createTexts, IconButton, Text, useTranslation } from "..";
import { numericStepperRecipe } from "../theme/slot-recipes/numeric-stepper";
import { Field, FieldBaseProps } from "./Field";

type NumericStepperVariants = RecipeVariantProps<typeof numericStepperRecipe>;

export type NumericStepperProps = FieldBaseProps &
  NumericStepperVariants & {
    children?: React.ReactNode;
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
    disabled?: boolean;
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
 * @example
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
 * You can use the NumericStepper inside of a Field component to get IDs etc linked up automatically:
 *
 * ```tsx
 * <NumericStepper />
 * ```
 * @see https://spor.vy.no/components/numeric-stepper
 */

export const NumericStepper = React.forwardRef<
  HTMLDivElement,
  NumericStepperProps
>((props: NumericStepperProps, ref) => {
  const {
    name: nameProp,
    id: idProp,
    value: valueProp,
    defaultValue = 1,
    onChange: onChangeProp,
    minValue = 0,
    maxValue = 99,
    disabled,
    withInput = true,
    stepSize = 1,
    showZero = false,
    ariaLabelContext = { singular: "", plural: "" },
    ...rest
  } = props;

  const addButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const recipe = useSlotRecipe({ key: "numericStepper" });
  const styles = recipe();
  const [value, onChange] = useControllableState<number>({
    value: valueProp,
    onChange: onChangeProp,
    defaultValue,
  });
  const clampedStepSize = Math.max(Math.min(stepSize, 10), 1);

  const focusOnAddButton = () => {
    addButtonRef.current?.focus();
  };

  return (
    <Field css={styles.root} width="auto" {...rest} ref={ref}>
      <VerySmallButton
        icon={<SubtractIcon stepLabel={clampedStepSize} />}
        aria-label={t(
          texts.decrementButtonAriaLabel(
            clampedStepSize,
            stepSize === 1
              ? ariaLabelContext.singular
              : ariaLabelContext.plural,
          ),
        )}
        onClick={() => {
          onChange(Math.max(value - clampedStepSize, minValue));
          if (Math.max(value - clampedStepSize, minValue) <= minValue) {
            focusOnAddButton();
          }
        }}
        visibility={value <= minValue ? "hidden" : "visible"}
        disabled={disabled}
        id={value <= minValue ? undefined : idProp}
      />
      {withInput ? (
        <Input
          min={minValue}
          max={maxValue}
          name={nameProp}
          value={value}
          disabled={disabled}
          id={!showZero && value === 0 ? undefined : idProp}
          css={styles.input}
          width={`${Math.max(value.toString().length + 1, 3)}ch`}
          visibility={!showZero && value === 0 ? "hidden" : "visible"}
          aria-live="assertive"
          aria-label={
            ariaLabelContext.plural === ""
              ? ""
              : t(texts.currentNumberAriaLabel(ariaLabelContext.plural))
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
        <Text
          visibility={!showZero && value === 0 ? "hidden" : "visible"}
          aria-live="assertive"
          paddingX="0.95rem"
          aria-label={
            ariaLabelContext.plural === ""
              ? ""
              : t(texts.currentNumberAriaLabel(ariaLabelContext.plural))
          }
        >
          {value}
        </Text>
      )}
      <VerySmallButton
        ref={addButtonRef}
        icon={<AddIcon stepLabel={clampedStepSize} />}
        aria-label={t(
          texts.incrementButtonAriaLabel(
            clampedStepSize,
            stepSize === 1
              ? ariaLabelContext.singular
              : ariaLabelContext.plural,
          ),
        )}
        onClick={() => onChange(Math.min(value + clampedStepSize, maxValue))}
        visibility={value >= maxValue ? "hidden" : "visible"}
        disabled={disabled}
        id={value >= maxValue ? undefined : idProp}
      />
    </Field>
  );
});
NumericStepper.displayName = "NumericStepper";

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
  disabled?: boolean;
  /** The ID of the button */
  id?: string;
};

/** Internal override for extra small icon buttons */
const VerySmallButton = React.forwardRef<
  HTMLButtonElement,
  VerySmallButtonProps
>((props, ref) => {
  const recipe = useSlotRecipe({ key: "numericStepper" });
  const styles = recipe({ colorPalette: "default" });
  return (
    <IconButton
      variant="primary"
      size="xs"
      css={styles.button}
      ref={ref}
      {...props}
    />
  );
});
VerySmallButton.displayName = "VerySmallButton";

type IconPropTypes = BoxProps & { stepLabel: number };

const SubtractIcon = ({ stepLabel }: IconPropTypes) => (
  <>
    <chakra.svg as="svg" viewBox="0 0 30 30" stroke="currentColor">
      <line
        x1="9"
        y1="15"
        x2="21"
        y2="15"
        strokeWidth="1.5"
        strokeLinecap="round"
        preserveAspectRatio="xMidYMid meet"
      />
    </chakra.svg>
    {stepLabel > 1 && (
      <chakra.span paddingRight="1">{stepLabel.toString()}</chakra.span>
    )}
  </>
);

const AddIcon = ({ stepLabel }: IconPropTypes) => (
  <>
    <chakra.svg as="svg" viewBox="0 0 30 30" stroke="currentColor">
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
    </chakra.svg>
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
