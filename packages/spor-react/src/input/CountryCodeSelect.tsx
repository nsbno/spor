"use client";

import React, { forwardRef } from "react";
import {
  Select,
  SelectProps,
  createTexts,
  useTranslation,
  SelectItem,
} from "..";
import { getSupportedCallingCodes } from "awesome-phonenumber";
import { createListCollection } from "@chakra-ui/react";

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

  const { variant } = props;

  return (
    <Select
      {...props}
      ref={ref}
      positioning={{ placement: "bottom", flip: false }}
      collection={callingCodes}
      lazyMount
      aria-label={t(texts.countryCode)}
      label={t(texts.countryCode)}
      placeholder={t(texts.countryCode)}
      variant={variant}
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
