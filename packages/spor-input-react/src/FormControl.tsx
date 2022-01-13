import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
} from "@chakra-ui/react";
import React from "react";

export const FormControl = (props: ChakraFormControlProps) => {
  return <ChakraFormControl {...props} />;
};
