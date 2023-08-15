import React from "react";
import { Flex, FlexProps } from "..";

type AttachedInputsProps = FlexProps;
/**
 * Attaches several inputs together, so that they look like one input.
 *
 * ```tsx
 * <AttachedInputs>
 *   <Input />
 *   <NativeSelect>
 *     <Item />
 *   </NativeSelect>
 * </AttachedInputs>
 * ```
 */
export const AttachedInputs = ({
  flexDirection = "row",
  ...rest
}: AttachedInputsProps) => {
  const attachedStyles = {
    horizontal: {
      "> *:first-of-type:not(:last-of-type) [data-attachable]": {
        borderEndRadius: 0,
      },
      "> *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
        borderRadius: 0,
      },
      "> *:not(:first-of-type):last-of-type [data-attachable]": {
        borderStartRadius: 0,
      },
    },
    vertical: {
      "> *:first-of-type:not(:last-of-type) [data-attachable]": {
        borderBottomRadius: 0,
      },
      "> *:not(:first-of-type):not(:last-of-type) [data-attachable]": {
        borderRadius: 0,
      },
      "> *:not(:first-of-type):last-of-type [data-attachable]": {
        borderTopRadius: 0,
      },
    },
  };
  const direction = flexDirection === "row" ? "horizontal" : "vertical";
  return (
    <Flex
      role="group"
      __css={attachedStyles[direction]}
      display="flex"
      flexDirection={flexDirection}
      {...rest}
    />
  );
};
