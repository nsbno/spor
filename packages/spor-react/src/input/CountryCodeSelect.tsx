"use client";

import { createListCollection } from "@chakra-ui/react";
import { getSupportedCallingCodes } from "awesome-phonenumber";
import { forwardRef, useMemo } from "react";

import {
  createTexts,
  Select,
  SelectItem,
  SelectProps,
  useTranslation,
} from "..";

const prioritizedCountryCodes = [
  { label: "+47", value: "+47" },
  { label: "+46", value: "+46" },
  { label: "+45", value: "+45" },
];

const sortedCallingCodes = getSupportedCallingCodes()
  .toSorted((a, b) => Number(a) - Number(b))
  .map((code) => ({
    label: `+${code}`,
    value: `+${code}`,
  }))
  .filter(
    (code) =>
      !prioritizedCountryCodes.some((pCode) => pCode.label === code.label),
  );

const allCallingCodes = createListCollection({
  items: [...prioritizedCountryCodes, ...sortedCallingCodes],
});

type CountryCodeSelectProps = Omit<SelectProps, "label" | "collection"> & {
  allowedCountryCodes?: string[];
};

export const CountryCodeSelect = forwardRef<
  HTMLDivElement,
  CountryCodeSelectProps
>((props, ref) => {
  const { t } = useTranslation();

  const filteredCallingCodes = useMemo(() => {
    if (!props.allowedCountryCodes) return allCallingCodes;

    const filteredItems = allCallingCodes.items.filter((callingCode) =>
      props.allowedCountryCodes?.includes(callingCode.label),
    );

    return createListCollection({ items: filteredItems });
  }, [props.allowedCountryCodes]);

  return (
    <Select
      {...props}
      ref={ref}
      positioning={{ placement: "bottom", flip: false }}
      collection={filteredCallingCodes}
      lazyMount
      aria-label={t(texts.countryCode)}
      sideRadiusVariant="rightSideSquare"
      role="combobox"
    >
      {filteredCallingCodes.items.map((code) => (
        <SelectItem key={code.label} item={code}>
          {code.label}
        </SelectItem>
      ))}
    </Select>
  );
});

CountryCodeSelect.displayName = "CountryCodeSelect";

const texts = createTexts({
  countryCode: {
    nb: "Landkode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
});
