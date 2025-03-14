"use client";

import { createListCollection } from "@chakra-ui/react";
import { getSupportedCallingCodes } from "awesome-phonenumber";
import React, { forwardRef } from "react";
import {
  Select,
  SelectItem,
  SelectProps,
  createTexts,
  useTranslation,
} from "..";

const prioritizedCountryCodes = [
  { label: "+47", value: "+47" },
  { label: "+46", value: "+46" },
  { label: "+45", value: "+45" },
];

const sortedCallingCodes = getSupportedCallingCodes()
  .sort((a, b) => Number(a) - Number(b))
  .map((code) => ({
    label: `+${code}`,
    value: `+${code}`,
  }))
  .filter(
    (code) =>
      !prioritizedCountryCodes.some((pCode) => pCode.label === code.label),
  );

export const callingCodes = createListCollection({
  items: [...prioritizedCountryCodes, ...sortedCallingCodes],
});

type CountryCodeSelectProps = Omit<SelectProps, "label" | "collection">;

export const CountryCodeSelect = forwardRef<
  HTMLDivElement,
  CountryCodeSelectProps
>((props, ref) => {
  const { t } = useTranslation();
  const invalid = props.invalid;

  return (
    <Select
      {...props}
      ref={ref}
      positioning={{ placement: "bottom", flip: false }}
      collection={callingCodes}
      lazyMount
      aria-label={t(texts.countryCode)}
      variant={"rightSideSquare"}
      outline={invalid ? "2px solid" : "none"}
      outlineColor={invalid ? "outline.error" : "none"}
      borderRadius={invalid ? "sm" : "none"}
      borderRightRadius={invalid ? "none" : "sm"}
    >
      {callingCodes.items.map((code) => (
        <SelectItem key={code.label} item={code}>
          {code.label}
        </SelectItem>
      ))}
    </Select>
  );
});

const texts = createTexts({
  countryCode: {
    nb: "Landkode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
});
