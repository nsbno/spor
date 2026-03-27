"use client";

import {
  chakra,
  Code as ChakraCode,
  CodeProps,
  RecipeVariantProps,
} from "@chakra-ui/react";
import React from "react"; // Added explicit React import

import { codeRecipie } from "../theme/recipes/code";

type CodeVariantProps = RecipeVariantProps<typeof codeRecipie> & CodeProps;

const StyledCode = chakra(ChakraCode, codeRecipie);

export const Code = function Code({
  ref,
  ...props
}: CodeVariantProps & {
  ref?: React.RefObject<HTMLElement>;
}) {
  return <StyledCode {...props} ref={ref} />;
};
