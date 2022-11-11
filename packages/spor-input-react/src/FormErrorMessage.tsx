import { Box, BoxProps, useFormControlContext } from "@chakra-ui/react";
import React from "react";

export type FormErrorMessageProps = {
  /**
   * The error message itself.
   */
  children: React.ReactNode;
};
/** An error message
 *
 * This component is used to show error messages related to a form input.
 * It should _always_ be used inside of a `FormControl` component.
 *
 * It will only render if the `isInvalid` prop of its enclosing `FormControl` component is set to true.
 *
 * ```tsx
 * <FormControl isInvalid={email === ""}>
 *    <Input label="E-mail" value={email} onChange={updateEmail} />
 *    <FormErrorMessage>This field is required</FormErrorMessage>
 * </FormControl>
 * ```
 *
 * If you're using a `FormHelperText` (or any other components inside of the `FormControl`), make sure to render the `FormErrorMessage` before those.
 * ```tsx
 * <FormControl isInvalid={email === ""}>
 *    <Input label="E-mail" value={email} onChange={updateEmail} />
 *    <FormErrorMessage>This field is required</FormErrorMessage>
 *    <FormHelperText>We don't share your email</FormHelperText>
 * </FormControl>
 * ```
 *
 * @see https://spor.cloud.vy.no/komponenter/skjemaelementer
 */
export const FormErrorMessage = ({ children }: FormErrorMessageProps) => {
  const formControlContext = useFormControlContext();
  if (!formControlContext) {
    throw new Error(
      "FormErrorMessage must be used within a FormControl component"
    );
  }
  if (!formControlContext.isInvalid) {
    return null;
  }
  const { ref, ...errorMessageProps } =
    formControlContext.getErrorMessageProps();
  return (
    <Box position="relative" ref={ref}>
      <Box
        borderRadius="xs"
        backgroundColor="lightRed"
        color="darkGrey"
        paddingX={1.5}
        paddingY={1}
        textStyle="xs"
        width="fit-content"
        position="absolute"
        top={-1.5}
        left={3}
        zIndex="popover"
        maxWidth="50ch"
        {...errorMessageProps}
      >
        <Arrow position="absolute" top="-0.25em" left="1em" />
        {children}
      </Box>
    </Box>
  );
};

/** The arrow of the error message box */
const Arrow = (props: BoxProps) => {
  return (
    <Box
      {...(props as any)}
      as="svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      transform="rotate(45deg)"
    >
      <Box
        as="path"
        fill="lightRed"
        d="M 0
        0 Q 2.4 6 0 12 Q 6 9.6 12 12 Q 9.6 6 12 0 Q 6 2.4 0 0 z"
      />
    </Box>
  );
};
