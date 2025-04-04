"use client";
import {
  RecipeVariantProps,
  NativeSelect as Select,
  useSlotRecipe,
} from "@chakra-ui/react";
import { DropdownDownFill18Icon } from "@vygruppen/spor-icon-react";
import * as React from "react";
import { nativeSelectSlotRecipe } from "../theme/slot-recipes/native-select";
import { Field } from "./Field";

type NativeSelectVariantProps = RecipeVariantProps<
  typeof nativeSelectSlotRecipe
>;

type NativeSelectRootProps = Exclude<
  Select.RootProps,
  "size" | "colorPalette"
> &
  React.PropsWithChildren<NativeSelectVariantProps> & {
    icon?: React.ReactNode;
    label: string;
    value?: string;
  };

/**
 * Selects let you choose between several options
 *
 * You should consider only using the Select component when you have more than  4 options. Otherwise, you should use the `<Radio>` component.
 *
 * <NativeSelect label="Choose language">
 *  <option>Norwegian (Bokmål)</option>
 *  <option>Norwegian (Nynorsk)</option>
 *  <option>Sami</option>
 *  <option>Swedish</option>
 *  <option>Danish</option>
 *  <option>Finnish</option>
 *  <option>English</option>
 * </NativeSelect>
 *
 */

export const NativeSelect = React.forwardRef<
  HTMLDivElement,
  NativeSelectRootProps
>(function NativeSelect(props, ref) {
  const {
    icon,
    children,
    variant = "core",
    invalid,
    disabled,
    ...rest
  } = props;
  const recipe = useSlotRecipe({ recipe: nativeSelectSlotRecipe });
  const styles = recipe({ variant });
  return (
    <Field {...rest}>
      <Select.Root ref={ref} css={styles.root}>
        <Select.Field
          css={styles.field}
          aria-disabled={disabled}
          aria-invalid={invalid}
        >
          {children}
        </Select.Field>
        <Select.Indicator css={styles.icon}>
          <DropdownDownFill18Icon />
        </Select.Indicator>
      </Select.Root>
    </Field>
  );
});
