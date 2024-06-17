import { BoxProps, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormLabel } from "../input";

/**
 * RadioCardGroupContext is used to pass down the state and handlers to the RadioCard components.
 *
 * @see RadioCard
 */

type RadioGroupContextProps = {
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  variant?: "base" | "floating";
  defaultValue?: string;
  value?: string;
};

export const RadioCardGroupContext =
  React.createContext<RadioGroupContextProps | null>(null);

type RadioCardGroupProps = BoxProps & {
  /** A string that will be assigned as the name attribute to all RadioCard components within the group. */
  name: string;
  /** The RadioCard components that make up the group. */
  children: React.ReactNode;
  /** Optional. Determines the style of the RadioCard. Can be either "base" or "floating". */
  variant?: "base" | "floating";
  /** Optional. Determines the direction of the group. Can be either "row" or "column". */
  direction?: "row" | "column";
  /** Optional. A label for the group. */
  groupLabel?: string;
  /** Optional. The default value of the RadioCard group. */
  defaultValue?: string;
  /** Optional. A function that will be called when the selected value changes. The function receives the value of the selected RadioCard. */
  onChange?: (value: string) => void;
};

export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  children,
  name,
  variant = "base",
  direction = "row",
  groupLabel,
  defaultValue,
  onChange,
  ...props
}: RadioCardGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || "",
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <RadioCardGroupContext.Provider
      value={{
        name,
        selectedValue,
        onChange: handleChange,
        variant,
        defaultValue: defaultValue || "",
      }}
    >
      <Stack as="fieldset" direction={direction} {...props}>
        {groupLabel && (
          <FormLabel as="legend" id={groupLabel}>
            {groupLabel}
          </FormLabel>
        )}
        {children}
      </Stack>
    </RadioCardGroupContext.Provider>
  );
};
