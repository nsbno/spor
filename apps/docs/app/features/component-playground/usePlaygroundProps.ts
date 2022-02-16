import { useState } from "react";

export type PropSpec = {
  /** The name of the prop */
  name: string;
} & (
  | { type: "input"; defaultValue: string }
  | { type: "choiceChip"; defaultValue: boolean }
  | { type: "select"; values: string[]; defaultValue: string }
);

/**
 * Hook that provides you with what you need to use the ComponentPlayground component.
 *
 * You pass in a list of prop specifications that should be available for editing in the preview, and you get the current props and the prop list in return, as well as a way to update the props.
 *
 * Each item in the prop specification list has a name, a type, a default value and an optional list of possible values.
 */
export const usePlaygroundProps = (propList: PropSpec[]) => {
  const [currentProps, setCurrentProps] = useState(() =>
    getDefaultProps(propList)
  );
  return {
    propList,
    currentProps,
    onPropsChange: (key: string, value: string | boolean) =>
      setCurrentProps((prev) => ({ ...prev, [key]: value })),
  };
};

const getDefaultProps = (propList: PropSpec[]) => {
  return propList.reduce(
    (acc, { name, defaultValue }) => ({ ...acc, [name]: defaultValue }),
    {} as Record<string, string | boolean>
  );
};
