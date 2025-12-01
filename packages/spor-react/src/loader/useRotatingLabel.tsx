"use client";
import { useMemo, useState } from "react";
import { useInterval } from "usehooks-ts";

type UseRotatingLabelArguments = {
  label?: string | string[];
  delay: number;
};
/** Returns a label from a set of labels */
export const useRotatingLabel = ({
  label,
  delay,
}: UseRotatingLabelArguments) => {
  const loadingTextArray = useMemo(
    () => (Array.isArray(label) ? label : [label]),
    [label],
  );
  const [currentLoadingTextIndex, setCurrentLoadingTextIndex] = useState(0);

  useInterval(() => {
    setCurrentLoadingTextIndex(
      (previousIndex) => (previousIndex + 1) % loadingTextArray.length,
    );
  }, delay);
  return loadingTextArray[currentLoadingTextIndex];
};
