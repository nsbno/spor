import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from "@chakra-ui/react";
import React from "react";

export type FormLabelProps = ChakraFormLabelProps;
export const FormLabel = (props: FormLabelProps) => {
  return <ChakraFormLabel {...props} />;
};
