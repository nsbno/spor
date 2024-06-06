// TogglePride.tsx
import React from "react";
import { usePride } from "./PrideProvider";
import { FormControl, FormLabel, Switch } from "../input";

type TogglePrideProps = {
  label: string;
};

export const TogglePride = ({ label }: TogglePrideProps) => {
  const { isPride, togglePride } = usePride();

  return (
    <FormControl display="flex" alignItems="center" gap={3}>
      <FormLabel margin="0">{label}</FormLabel>
      <Switch
        size="sm"
        onChange={() => togglePride()}
        defaultChecked={isPride}
      />
    </FormControl>
  );
};
