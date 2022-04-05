import {
  Button,
  forwardRef,
  IconButton,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  CloseOutline24Icon,
  SearchOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { FormLabel, InputGroup, InputLeftElement, InputRightElement } from ".";

export type SearchInputProps = Exclude<
  ChakraInputProps,
  "variant" | "size" | "leftIcon" | "rightIcon"
> & {
  label: string;
  onReset: () => void;
};
export const SearchInput = forwardRef<SearchInputProps, "input">(
  ({ id, label, onReset, ...props }, ref) => {
    return (
      <InputGroup position="relative">
        <InputLeftElement>
          <SearchOutline24Icon />
        </InputLeftElement>
        <ChakraInput {...props} placeholder=" " pr={10} pl={7} ref={ref} />
        <FormLabel htmlFor={id} pointerEvents="none">
          {label}
        </FormLabel>
        {Boolean(props.value) && (
          <InputRightElement width="fit-content">
            <IconButton
              variant="ghost"
              type="button"
              size="sm"
              mr={1}
              aria-label="Søk"
              icon={<CloseOutline24Icon />}
              onClick={onReset}
            ></IconButton>
          </InputRightElement>
        )}
      </InputGroup>
    );
  }
);
