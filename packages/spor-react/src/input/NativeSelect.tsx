"use client";

import {
  Field,
  RecipeVariantProps,
  NativeSelect as Select,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import { nativeSelectSlotRecipe } from "../theme/slot-recipes/native-select";
import { DropdownDownFill18Icon } from "@vygruppen/spor-icon-react";

type NativeSelectVariantProps = RecipeVariantProps<
  typeof nativeSelectSlotRecipe
>;

type NativeSelectRootProps = Exclude<
  Select.RootProps,
  "size" | "colorPalette"
> &
  React.PropsWithChildren<NativeSelectVariantProps> & {
    icon?: React.ReactNode;
    label?: string;
    variant?: "floating" | "core";
  };

/**
 * Selects let you choose between several options
 *
 * You should consider only using the Select component when you have more than  4 options. Otherwise, you should use the `<Radio>` component.
 *
 * ```tsx
 * <Field label="Select an option">
 *  <NativeSelectRoot variant="floating">
 *    <NativeSelectField
 *      items={["Option 1", "Option 2", "Option 3"]}
 *      placeholder="Select an option"
 *    />
 *  </NativeSelect>
 * </Field>
 * ```
 *
 * or
 *
 *  * ```tsx
 * <Field label="Select an option">
 *  <NativeSelectRoot variant="floating">
 *    <NativeSelectField placeholder="Select an option">
 *     <option value="Option 1">Option 1</option>
 *     <option value="Option 2">Option 2</option>
 *     <option value="Option 3">Option 3</option>
 *   </NativeSelectField>
 *  </NativeSelect>
 * </Field>
 * ```
 */

export const NativeSelect = React.forwardRef<
  HTMLDivElement,
  NativeSelectRootProps
>(function NativeSelect(props, ref) {
  const { icon, children, variant = "core", ...rest } = props;
  const recipe = useSlotRecipe({ recipe: nativeSelectSlotRecipe });
  const styles = recipe({ variant });
  return (
    <Field.Root>
      <Select.Root ref={ref} {...rest} css={styles.root}>
        <Select.Field css={styles.field}>{children}</Select.Field>
        <Select.Indicator css={styles.icon}>
          <DropdownDownFill18Icon />
        </Select.Indicator>
      </Select.Root>
      <Field.Label css={styles.label}>{props.label}</Field.Label>
    </Field.Root>
  );
});

interface NativeSelectItem {
  value: string;
  label?: string;
  disabled?: boolean;
}

interface NativeSelectField extends Select.FieldProps {
  items?: Array<string | NativeSelectItem>;
}

export const NativeSelectField = React.forwardRef<
  HTMLSelectElement,
  NativeSelectField
>(function NativeSelectField(props, ref) {
  const { items: itemsProp, children, ...rest } = props;

  const items = React.useMemo(
    () =>
      itemsProp?.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item,
      ),
    [itemsProp],
  );

  const recipe = useSlotRecipe({ recipe: nativeSelectSlotRecipe });
  const styles = recipe();
  return (
    <Select.Field ref={ref} {...rest} css={styles.field}>
      {children}
      {items?.map((item) => (
        <option key={item.value} value={item.value} disabled={item.disabled}>
          {item.label}
        </option>
      ))}
    </Select.Field>
  );
});
