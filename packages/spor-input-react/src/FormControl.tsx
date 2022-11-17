import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type FormControlProps = ChakraFormControlProps;
export const FormControl = forwardRef<FormControlProps, "div">((props, ref) => {
  return <ChakraFormControl {...props} ref={ref} />;
});
