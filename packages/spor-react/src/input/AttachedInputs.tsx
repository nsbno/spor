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
 *     <SelectItem />
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
      "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
      "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
      "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 },
    },
    vertical: {
      "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
      "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
      "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 },
    },
  };
  const direction = flexDirection === "row" ? "horizontal" : "vertical";
  return (
    <Flex
      role="group"
      css={attachedStyles[direction]}
      flexDirection={flexDirection}
      {...rest}
    />
  );
};
