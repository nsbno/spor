"use client";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { ProgressIndicatorVariantProps } from "./ProgressIndicator";

type ProgressDot = PropsWithChildren<ProgressIndicatorVariantProps> & {
  isActive: boolean;
};

export const ProgressDot = ({ isActive }: ProgressDot) => {
  const recipe = useSlotRecipe({ key: "progressIndicator" });
  const style = recipe({});
  return (
    <chakra.svg
      display="block"
      css={style.progressDot}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-current={isActive ? "step" : undefined}
    >
      <chakra.circle as="circle" cx="50" cy="50" r="50" />
    </chakra.svg>
  );
};
