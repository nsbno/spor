"use client";
import {
  RecipeVariantProps,
  NativeSelect as ChakraNativeSelect,
  useSlotRecipe,
} from "@chakra-ui/react";
import { DropdownDownFill18Icon } from "@vygruppen/spor-icon-react";
import * as React from "react";
import { nativeSelectSlotRecipe } from "../theme/slot-recipes/native-select";
import { Field } from "./Field";

type NativeSelectVariantProps = RecipeVariantProps<
  typeof nativeSelectSlotRecipe
>;

type NativeSelectRootProps =
  React.PropsWithChildren<NativeSelectVariantProps> & {
    icon?: React.ReactNode;
    label: string;
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
  const { icon, children, variant = "core", label, ...rest } = props;
  const recipe = useSlotRecipe({ recipe: nativeSelectSlotRecipe });
  const styles = recipe({ variant });
  return (
    <Field label={label}>
      <ChakraNativeSelect.Root ref={ref} css={styles.root}>
        <ChakraNativeSelect.Field css={styles.field} {...rest}>
          {children}
        </ChakraNativeSelect.Field>
        <ChakraNativeSelect.Indicator css={styles.icon}>
          <DropdownDownFill18Icon />
        </ChakraNativeSelect.Indicator>
      </ChakraNativeSelect.Root>
    </Field>
  );
});
