import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type FormLabelProps = ChakraFormLabelProps;
export const FormLabel = forwardRef<FormLabelProps, "label">((props, ref) => {
  return <ChakraFormLabel {...props} ref={ref} />;
});
