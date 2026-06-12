"use client";

import {
  CloseOutline18Icon,
  CloseOutline24Icon,
  SearchOutline18Icon,
  SearchOutline24Icon,
} from "@vygruppen/spor-icon-react";

import { createTexts, Input, InputProps, useTranslation } from "..";
import { IconButton } from "../button/IconButton";

export type SearchInputProps = InputProps & {
  /** Callback for when the clear button is clicked */
  onReset?: () => void;
};

/** Simple search input component.
 *
 * Includes a search icon, a localized label and a reset button.
 */

export const SearchInput = ({
  ref,
  ...props
}: SearchInputProps & {
  ref?: React.Ref<HTMLInputElement>;
}) => {
  const { t } = useTranslation();
  const { variant = "core", onReset, label, value, size = "md" } = props;
  const clearButton = onReset && value;

  return (
    <Input
      ref={ref}
      type="search"
      variant={variant}
      size={size}
      {...props}
      startElement={
        size == "md" ? (
          <SearchOutline24Icon color="icon" />
        ) : (
          <SearchOutline18Icon color="icon" />
        )
      }
      endElement={
        clearButton && (
          <IconButton
            variant="ghost"
            type="button"
            size="sm"
            aria-label={t(texts.reset)}
            icon={
              size == "md" ? <CloseOutline24Icon /> : <CloseOutline18Icon />
            }
            onClick={onReset}
          />
        )
      }
      label={(label as string) ?? t(texts.label)}
    />
  );
};

const texts = createTexts({
  label: {
    nb: "Søk",
    nn: "Søk",
    sv: "Sök",
    en: "Search",
  },
  reset: {
    nb: "Tøm søkefeltet",
    nn: "Tøm søkefelt",
    sv: "Rensa sökrutan",
    en: "Reset search field",
  },
});
