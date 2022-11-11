import { Box } from "@chakra-ui/react";
import React from "react";

export type FormErrorMessageProps = {
  children: React.ReactNode;
};
export const FormErrorMessage = ({ children }: FormErrorMessageProps) => {
  return <Box>{children}</Box>;
};
