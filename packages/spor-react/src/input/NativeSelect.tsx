"use client";

import {
  RecipeVariantProps,
  NativeSelect as Select,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import { nativeSelectSlotRecipe } from "../theme/slot-recipes/native-select";

type NativeSelectVariantProps = RecipeVariantProps<
  typeof nativeSelectSlotRecipe
>;

type NativeSelectRootProps = Exclude<
  Select.RootProps,
  "size" | "colorPalette"
> &
  React.PropsWithChildren<NativeSelectVariantProps> & {
    icon?: React.ReactNode;
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

export const NativeSelectRoot = React.forwardRef<
  HTMLDivElement,
  NativeSelectRootProps
>(function NativeSelect(props, ref) {
  const { icon, children, ...rest } = props;
  const recipe = useSlotRecipe({ recipe: nativeSelectSlotRecipe });
  const styles = recipe({ icon });
  return (
    <Select.Root ref={ref} {...rest} css={styles}>
      {children}
      <Select.Indicator>{icon}</Select.Indicator>
    </Select.Root>
  );
});

interface NativeSelectItem {
  value: string;
  label: string;
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
    <Select.Field ref={ref} {...rest} css={styles}>
      {children}
      {items?.map((item) => (
        <option key={item.value} value={item.value} disabled={item.disabled}>
          {item.label}
        </option>
      ))}
    </Select.Field>
  );
});
