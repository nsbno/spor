"use client";
import {
  NativeSelect as ChakraNativeSelect,
  NativeSelectFieldProps as ChakraNativeSelectFieldProps,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import { DropdownDownFill18Icon } from "@vygruppen/spor-icon-react";
import * as React from "react";

import { nativeSelectSlotRecipe } from "../theme/slot-recipes/native-select";
import { Field, FieldBaseProps } from "./Field";

type NativeSelectVariantProps = RecipeVariantProps<
  typeof nativeSelectSlotRecipe
>;

export type NativeSelectdProps =
  React.PropsWithChildren<NativeSelectVariantProps> &
    FieldBaseProps &
    ChakraNativeSelectFieldProps & {
      icon?: React.ReactNode;
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
  NativeSelectdProps
>(function NativeSelect(props, ref) {
  const {
    children,
    variant = "core",
    label,
    invalid,
    disabled,
    required,
    helperText,
    errorText,
    ...rest
  } = props;

  const recipe = useSlotRecipe({ key: "nativeSelect" });
  const styles = recipe({ variant });

  return (
    <Field
      label={label}
      invalid={invalid}
      disabled={disabled}
      required={required}
      helperText={helperText}
      errorText={errorText}
      id={rest.id}
      floatingLabel={true}
      shouldFloat={true}
    >
      <ChakraNativeSelect.Root
        ref={ref}
        css={styles.root}
        aria-disabled={disabled}
      >
        <ChakraNativeSelect.Field
          css={styles.field}
          aria-invalid={invalid}
          {...rest}
        >
          {children}
        </ChakraNativeSelect.Field>
        <ChakraNativeSelect.Indicator css={styles.icon}>
          <DropdownDownFill18Icon />
        </ChakraNativeSelect.Indicator>
      </ChakraNativeSelect.Root>
    </Field>
  );
});
