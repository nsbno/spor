"use client";
import {
  RadioCard as ChakraRadioCard,
  RecipeVariantProps,
  Span,
  useSlotRecipe,
} from "@chakra-ui/react";
import { createContext, useContext, useId } from "react";

import { choiceChipSlotRecipe } from "@/theme/slot-recipes/choice-chip";

/**
 * Choice chips are radio buttons that look like selectable buttons, allowing only one selection at a time.
 *
 * Choice chips are available in four different sizes - `xs`, `sm`, `md` and `lg`.
 *
 * @example
 * ```tsx
 * <ChoiceChipGroup defaultValue="economy">
 *   <ChoiceChipLabel>Choose your class</ChoiceChipLabel>
 *   <Stack direction="row">
 *      <ChoiceChip value="economy">Economy</ChoiceChip>
 *      <ChoiceChip value="business">Business</ChoiceChip>
 *      <ChoiceChip value="first-class">First Class</ChoiceChip>
 *   </Stack>
 * </ChoiceChipGroup>
 * ```
 *
 * There are also three different chipType - `icon`, `choice` and `filter`.
 *
 * ```tsx
 * <ChoiceChipGroup defaultValue="bus">
 *  <ChoiceChip chipType="icon" icon={{default: <Bus24Icon />, checked: <Bus24Icon />}} value="bus">Bus</ChoiceChip>
 *  <ChoiceChip chipType="choice" icon={{default: <Bus24Icon />, checked: <Bus24Icon />}} value="train">Train</ChoiceChip>
 *  <ChoiceChip chipType="filter" icon={{default: <Bus24Icon />, checked: <Bus24Icon />}} value="boat">Boat</ChoiceChip>
 * </ChoiceChipGroup>
 * ```
 *
 * There are also three different variants - `core`, `accent` and `floating`.
 *
 * ```tsx
 * <ChoiceChipGroup defaultValue="bus">
 *   <ChoiceChip variant="core" value="bus">Bus</ChoiceChip>
 *   <ChoiceChip variant="accent" value="boat">Boat</ChoiceChip>
 *   <ChoiceChip variant="floating" value="train">Train</ChoiceChip>
 * </ChoiceChipGroup>
 * ```
 *
 * @see Docs https://spor.vy.no/components/choicechip
 */

type RadioCardVariantProps = RecipeVariantProps<typeof choiceChipSlotRecipe>;

// Create a context to pass variant props from Group to individual chips
const ChoiceChipContext = createContext<RadioCardVariantProps | undefined>(
  undefined,
);

type CheckBoxIcon = {
  default: React.ReactNode;
  checked: React.ReactNode;
};

type RadioCardItemProps = Exclude<
  ChakraRadioCard.ItemProps,
  "colorPalette" | "indicator" | "variant" | "size" | "addon"
> &
  RadioCardVariantProps & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    ariaLabel?: string;
    icon?: CheckBoxIcon;
  };

export const ChoiceChip = ({
  ref,
  ...props
}: RadioCardItemProps & {
  ref?: React.Ref<HTMLInputElement>;
}) => {
  const { children, inputProps, icon, variant, size, chipType, ...rest } =
    props;
  const contextProps = useContext(ChoiceChipContext);

  const uniqueId = useId();
  const itemControlId = `radio-card-item-control-${uniqueId}`;

  const inputHasAriaLabel =
    inputProps?.["aria-labelledby"] || inputProps?.["aria-label"];

  // Merge props from context with component props (component props take precedence)
  const finalVariant = variant ?? contextProps?.variant;
  const finalSize = size ?? contextProps?.size;
  const finalChipType = chipType ?? contextProps?.chipType;

  const recipe = useSlotRecipe({ recipe: choiceChipSlotRecipe });
  const styles = recipe({
    variant: finalVariant,
    size: finalSize,
    chipType: finalChipType,
  });

  return (
    <ChakraRadioCard.Item {...rest} css={styles.item}>
      <ChakraRadioCard.ItemHiddenInput
        aria-labelledby={
          inputHasAriaLabel ? inputProps?.["aria-labelledby"] : itemControlId
        }
        ref={ref}
        {...inputProps}
      />
      <ChakraRadioCard.ItemControl
        id={itemControlId}
        aria-hidden
        css={styles.itemControl}
      >
        <ChakraRadioCard.ItemContext>
          {({ checked }) => (
            <ChakraRadioCard.Label css={styles.label}>
              {icon && <Span>{checked ? icon.checked : icon.default}</Span>}
              {children}
            </ChakraRadioCard.Label>
          )}
        </ChakraRadioCard.ItemContext>
      </ChakraRadioCard.ItemControl>
    </ChakraRadioCard.Item>
  );
};

type RadioCardRootProps = Exclude<
  ChakraRadioCard.RootProps,
  "variant" | "size"
> &
  RadioCardVariantProps & {
    children: React.ReactNode;
    gap?: string | number;
    direction?: "row" | "column";
    display?: string;
  };

export const ChoiceChipGroup = ({
  ref,
  ...props
}: RadioCardRootProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const { children, variant, size, chipType, ...rest } = props;
  const recipe = useSlotRecipe({ recipe: choiceChipSlotRecipe });
  const styles = recipe({ variant, size, chipType });
  return (
    <ChoiceChipContext.Provider value={{ variant, size, chipType }}>
      <ChakraRadioCard.Root
        css={styles.root}
        ref={ref}
        variant={variant}
        {...rest}
      >
        {children}
      </ChakraRadioCard.Root>
    </ChoiceChipContext.Provider>
  );
};

export const ChoiceChipLabel = ChakraRadioCard.Label;
