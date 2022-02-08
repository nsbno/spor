import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
} from "@chakra-ui/react";
import React from "react";

export type FormControlProps = ChakraFormControlProps;
export const FormControl = (props: FormControlProps) => {
  return <ChakraFormControl {...props} />;
};
