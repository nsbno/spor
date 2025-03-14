"use client";

import { Group, GroupProps } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type ButtonGroupProps = GroupProps & {
  children: React.ReactNode;
};
/**
 * Used to group or attach buttons together.
 *
 * If you have more than one button next to eachother, you might want to add a `ButtonGroup` to group them.
 *
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="secondary">Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </ButtonGroup>
 * ```
 *
 *
 * Attach buttons together with the `attached` prop.
 *
 * ```tsx
 * <ButtonGroup attached>
 *   <Button variant="primary">Open</Button>
 *   <IconButton variant="ghost">
 *     <SaveIcon aria-label="Save"/>
 *   </IconButton>
 * </ButtonGroup>
 * ```
 *
 * Use the `grow` prop to make the buttons grow to fill the available space.
 *
 * ```tsx
 * <ButtonGroup grow>
 *  <Button variant="primary">Open</Button>
 *  <Button variant="secondary">Save</Button>
 * </ButtonGroup>
 */

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <Group {...props} ref={ref}>
        {children}
      </Group>
    );
  },
);
