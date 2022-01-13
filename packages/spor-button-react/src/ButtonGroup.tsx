import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps as ChakraButtonGroupProps,
} from "@chakra-ui/react";
import React from "react";

export type ButtonGroupProps = ChakraButtonGroupProps;
/**
 * Group buttons together with a `ButtonGroup`!
 *
 * If you have more than one button next to eachother, you might want to add a `ButtonGroup` to group them.
 *
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="tertiary">Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </ButtonGroup>
 * ```
 *
 * You can specify the size of all buttons in a group with the `size` prop. You can also set the same variant across all buttons with the `variant` prop.
 *
 * ```tsx
 * <ButtonGroup variant="secondary" size="md">
 *   <Button>Open</Button>
 *   <Button>Save</Button>
 * </ButtonGroup>
 * ```
 *
 * Finally, you can join several buttons together with the `isAttached` prop.
 *
 * ```tsx
 * <ButtonGroup variant="secondary" size="md" isAttached>
 *   <Button>Open</Button>
 *   <IconButton>
 *     <SaveIcon aria-label="Save"/>
 *   </IconButton>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = (props: ButtonGroupProps) => (
  <ChakraButtonGroup {...props} />
);
