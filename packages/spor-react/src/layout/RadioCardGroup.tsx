import { BoxProps, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormLabel } from "../input";
import { RadioCard } from "./RadioCard";

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
};

export const RadioCardGroupContext =
  React.createContext<RadioGroupContextProps | null>(null);

type RadioCardGroupProps = BoxProps & {
  name: string;
  children: React.ReactNode;
  variant?: "base" | "floating";
  direction?: "row" | "column";
  groupLabel?: string;
  defaultValue?: string;
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
      <Stack
        as="fieldset"
        direction={direction}
        aria-labelledby={groupLabel || name}
        role="radiogroup"
        tabIndex={0}
        {...props}
      >
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
