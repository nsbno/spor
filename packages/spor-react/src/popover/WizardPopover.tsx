import {
  DarkMode,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";
import * as React from "react";
import { PopoverWizardBody } from "./PopoverWizardBody";

export type WizardPopoverProps = PopoverProps & {
  /** Steps in the wizard. Each item is its own step */
  children: React.ReactNode;
  /** The element that triggers the wizard */
  triggerElement: React.ReactNode;
  /**
   * Where the popover should be placed by default.
   *
   * Note - this is a suggestion, and may be overridden by space concerns.
   */
  placement?: "top" | "bottom" | "left" | "right";
  /** Should the popover have a close button? */
  withCloseButton?: boolean;
};
/**
 * A popover that displays its children one at a time, with a step indicator
 *
 * Each child is its own step. If you want several components inside a
 * single slide, you want to wrap them in an external component (like a Stack).
 *
 * ```tsx
 * <WizardPopover triggerElement={<Button>Click me</Button>}>
 *  <Text>First step</Text>
 *  <Text>Second step</Text>
 *  <Stack>
 *    <Text>Third step is special.</Text>
 *    <Text>It even has several paragraphs 🤯</Text>
 *  </Stack>
 * </WizardPopover>
 * ```
 */
export const WizardPopover = ({
  children,
  triggerElement,
  withCloseButton = false,
}: WizardPopoverProps) => {
  return (
    <DarkMode>
      <Popover size="lg">
        <PopoverTrigger>{triggerElement}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseButton />}
          <PopoverWizardBody>{children}</PopoverWizardBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};
