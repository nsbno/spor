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
 * ```tsx
 * <ChoiceChipGroup defaultValue="economy">
 *      <ChoiceChip value="economy">Economy</ChoiceChip>
 *      <ChoiceChip value="business">Business</ChoiceChip>
 *      <ChoiceChip value="first-class">First Class</ChoiceChip>
 * </ChoiceChipGroup>
 * ```
 *
 * There are also three different variants - `core`, `accent` and `floating`.
 *
 * ```tsx
 * <>
 * <ChoiceChipGroup defaultValue="bus" variant="core">
 *   <ChoiceChip value="bus">Bus</ChoiceChip>
 * </ChoiceChipGroup>
 * <ChoiceChipGroup defaultValue="bus" variant="accent">
 *   <ChoiceChip value="bus">Bus</ChoiceChip>
 * </ChoiceChipGroup>
 * <ChoiceChipGroup defaultValue="bus" variant="floating">
 *   <ChoiceChip value="bus">Bus</ChoiceChip>
 * </ChoiceChipGroup>
 * </>
 * ```
 *
 * @see https://spor.vy.no/components/choice-chip
 */

type RadioCardVariantProps = RecipeVariantProps<typeof choiceChipSlotRecipe>;

type Variant = Pick<RadioCardRootProps, "variant" | "size">;

const ChoiceChipContext = createContext<Variant>({
  variant: "core",
  size: "sm",
});
const useChoiceChipContext = () => useContext(ChoiceChipContext);

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
  const { children, inputProps, icon, variant, size, css, ...rest } = props;
  const { variant: contextVariant, size: contextSize } = useChoiceChipContext();

  const uniqueId = useId();
  const itemControlId = `radio-card-item-control-${uniqueId}`;

  const inputHasAriaLabel =
    inputProps?.["aria-labelledby"] || inputProps?.["aria-label"];

  const finalVariant = variant ?? contextVariant;
  const finalSize = size ?? contextSize;

  const recipe = useSlotRecipe({ key: "choiceChip" });
  const styles = recipe({
    variant: finalVariant,
    size: finalSize,
  });

  return (
    <ChakraRadioCard.Item {...rest} css={{ ...css, ...styles.item }}>
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
              {checked
                ? icon?.checked && <Span>{icon.checked}</Span>
                : icon?.default && <Span>{icon.default}</Span>}
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
  const { children, variant, size, css, ...rest } = props;
  const recipe = useSlotRecipe({ key: "choiceChip" });
  const styles = recipe({ variant, size });
  return (
    <ChoiceChipContext.Provider value={{ variant, size }}>
      <ChakraRadioCard.Root
        css={{ ...styles.root, ...css }}
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
