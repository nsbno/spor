import {
  Center,
  ChoiceChip,
  FormControl,
  Input,
  Select,
} from "@vygruppen/spor-react";
import { toCapitalCase, toTitleCase } from "~/utils/stringUtils";
import { PropSpec } from "./usePlaygroundProps";

export type EditablePropProps = {
  /** The specification of the prop that's supposed to be editable */
  prop: PropSpec;
  /** The current value of the prop */
  value: string | boolean;
  /** Callback for when the value changes */
  onChange: (key: string, value: string | boolean) => void;
};
export const EditableProp = ({ prop, value, onChange }: EditablePropProps) => {
  const label = toTitleCase(prop.name === "children" ? "Tekst" : prop.name);
  switch (prop.type) {
    case "input":
      return (
        <FormControl>
          <Input
            label={label}
            value={value as string}
            onChange={(e) => onChange(prop.name, e.target.value)}
          />
        </FormControl>
      );
    case "choiceChip":
      return (
        <Center>
          <ChoiceChip
            size="md"
            isChecked={value as boolean}
            onChange={(e) => onChange(prop.name, e.target.checked)}
          >
            {toCapitalCase(label)}
          </ChoiceChip>
        </Center>
      );
    case "select":
      return (
        <FormControl>
          <Select
            label={label}
            value={value as string}
            onChange={(e) => onChange(prop.name, e.target.value)}
          >
            {prop.values.map((v) => (
              <option key={v} value={v}>
                {toTitleCase(v)}
              </option>
            ))}
          </Select>
        </FormControl>
      );
    default:
      console.warn("Unknown prop type", prop);
      return null;
  }
};
