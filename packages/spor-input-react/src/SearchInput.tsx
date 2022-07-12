import {
  forwardRef,
  IconButton,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
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
  /** Optional label. Defaults to the localized version of "search" */
  label?: string;
  /** Callback for when the clear button is clicked */
  onReset?: () => void;
};
/** Simple search input component.
 *
 * Includes a search icon, a localized label and a reset button.
 */
export const SearchInput = forwardRef<SearchInputProps, "input">(
  ({ label, onReset, ...props }, ref) => {
    const { t } = useTranslation();
    const showCloseButton = onReset && Boolean(props.value);
    return (
      <InputGroup position="relative">
        <InputLeftElement pointerEvents="none">
          <SearchOutline24Icon />
        </InputLeftElement>
        <ChakraInput
          pl={7}
          pr={7}
          {...props}
          type="search"
          css={{
            "&::-webkit-search-cancel-button": {
              WebkitAppearance: "none",
            },
          }}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel htmlFor={props.id} pointerEvents="none">
          {label ?? t(texts.label)}
        </FormLabel>
        {showCloseButton && (
          <InputRightElement width="fit-content" pointerEvents="none">
            <IconButton
              variant="ghost"
              type="button"
              size="sm"
              mr={1}
              aria-label={t(texts.reset)}
              icon={<CloseOutline24Icon />}
              onClick={onReset}
            />
          </InputRightElement>
        )}
      </InputGroup>
    );
  }
);

const texts = {
  label: {
    [Language.NorwegianBokmal]: "Søk",
    [Language.Swedish]: "Sök",
    [Language.English]: "Search",
  },
  reset: {
    [Language.NorwegianBokmal]: "Tøm søkefeltet",
    [Language.Swedish]: "Rensa sökrutan",
    [Language.English]: "Reset search field",
  },
};
