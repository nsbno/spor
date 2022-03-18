import {
  chakra,
  forwardRef,
  useCheckbox,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import React, { ChangeEvent } from "react";

export type ChoiceChipProps = {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  defaultChecked?: boolean;
  /** The button text */
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};
/**
 * Choice chips are checkboxes that look like selectable buttons.
 *
 * Choice chips are available in three different sizes - `sm`, `md` and `lg`.
 *
 * ```tsx
 * <Stack direction="row">
 *   <ChoiceChip size="lg">Bus</ChoiceChip>
 *   <ChoiceChip size="lg">Train</ChoiceChip>
 * </Stack>
 * ```
 *
 * You can add an icon as well, if you want to!
 * ```tsx
 * <Stack direction="row">
 *   <ChoiceChip size="lg" icon={<BusIcon />}>Bus</ChoiceChip>
 *   <ChoiceChip size="lg" icon={<TrainIcon />}>Train</ChoiceChip>
 * </Stack>
 * ```
 */
export const ChoiceChip = forwardRef((props: ChoiceChipProps, ref) => {
  const { children, icon } = props;

  const {
    state,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps,
  } = useCheckbox(props);
  const styles = useMultiStyleConfig("ChoiceChip", {
    size: props.size,
    hasLabel: Boolean(props.children),
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
        {icon && <chakra.span __css={styles.icon}>{icon}</chakra.span>}
        <chakra.span __css={styles.label} {...getCheckboxProps()}>
          {children}
        </chakra.span>
      </chakra.div>
    </chakra.label>
  );
});
