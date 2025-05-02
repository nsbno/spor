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

export const Code = React.forwardRef<HTMLElement, CodeVariantProps>(
  function Code(props, ref) {
    return <StyledCode {...props} ref={ref} />;
  },
);
