import {
  chakra,
  forwardRef,
  useCheckbox,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import { CloseOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { ChangeEvent } from "react";

export type ChoiceChipProps = {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  defaultChecked?: boolean;
  /** The button text */
  children: React.ReactNode;
  icon?: {
    default: React.ReactNode;
    checked: React.ReactNode;
  };
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "icon" | "choice" | "filter";
  checkedIcon?: React.ReactNode;
};
/**
 * Choice chips are checkboxes that look like selectable buttons.
 *
 * Choice chips are available in four different sizes - `sm`, `md`, `lg` and `xl`.
 *
 * ```tsx
 * <Stack direction="row">
 *   <ChoiceChip size="lg">Bus</ChoiceChip>
 *   <ChoiceChip size="lg">Train</ChoiceChip>
 * </Stack>
 * ```
 *
 * There are also three different variants - `icon`, `choice` and `filter`.
 *
 * ```tsx
 * <Stack direction="row">
 *  <ChoiceChip variant="icon" icon={<Bus24Icon />}>Bus</ChoiceChip>
 *  <ChoiceChip variant="choice" icon={<Bus24Icon />}>Bus</ChoiceChip>
 *  <ChoiceChip variant="filter" icon={<Bus24Icon />}>Bus</ChoiceChip>
 * </Stack>
 *
 * You can add an icon as well, if you want to!
 *
 * ```tsx
 * <Stack direction="row">
 *   <ChoiceChip size="md" icon={<BusIcon />}>Bus</ChoiceChip>
 *   <ChoiceChip size="lg" icon={<TrainIcon />}>Train</ChoiceChip>
 * </Stack>
 * ```
 */
export const ChoiceChip = forwardRef((props: ChoiceChipProps, ref) => {
  const {
    children,
    icon,
    checkedIcon,
    size = "md",
    variant = "choice",
  } = props;

  const {
    state,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps,
  } = useCheckbox(props);
  const styles = useMultiStyleConfig("ChoiceChip", {
    size,
    variant,
    icon,
    checkedIcon,
    hasLabel: Boolean(children),
  });

  return (
    <chakra.label {...getRootProps()}>
      <chakra.input {...getInputProps({}, ref)} />
      <chakra.div
        {...getLabelProps()}
        __css={styles.container}
        data-checked={dataAttr(state.isChecked)}
        data-hover={dataAttr(state.isHovered)}
        data-focus={dataAttr(state.isFocused)}
      >
        {icon && (
          <chakra.span __css={styles.icon}>
            {state.isChecked && checkedIcon ? checkedIcon : icon}
          </chakra.span>
        )}

        <chakra.span __css={styles.label} {...getCheckboxProps()}>
          {variant !== "icon" && children}
        </chakra.span>
        {variant === "filter" && state.isChecked && (
          <CloseOutline24Icon ml={1.5} />
        )}
      </chakra.div>
    </chakra.label>
  );
});
