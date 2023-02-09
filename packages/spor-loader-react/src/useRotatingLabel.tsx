import { useInterval } from "@chakra-ui/react";
import { useMemo, useState } from "react";

type UseRotatingLabelArgs = {
  label?: string | string[];
  delay: number;
};
/** Returns a label from a set of labels */
export const useRotatingLabel = ({ label, delay }: UseRotatingLabelArgs) => {
  const loadingTextArray = useMemo(
    () => (Array.isArray(label) ? label : [label]),
    [label]
  );
  const [currentLoadingTextIndex, setCurrentLoadingTextIndex] = useState(0);

  useInterval(() => {
    setCurrentLoadingTextIndex(
      (prevIndex) => (prevIndex + 1) % loadingTextArray.length
    );
  }, delay);
  return loadingTextArray[currentLoadingTextIndex];
};
