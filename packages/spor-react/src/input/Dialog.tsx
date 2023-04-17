import { Box, Heading } from "@chakra-ui/react";
import React, { useRef } from "react";
import { AriaDialogProps, useDialog } from "react-aria";

type DialogProps = AriaDialogProps & {
  /** Optional title tag
   *
   * Important! If you don't pass a title, you must pass an `aria-label` prop to the dialog.
   */
  title?: string;
  /** The content of the dialog */
  children: React.ReactNode;
};
/** Internal component for creating card select popovers */
export const Dialog = ({ title, children, ...props }: DialogProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <Box {...dialogProps} ref={ref} outline="none">
      {title && (
        <Heading as="h3" {...titleProps}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};
