import React, { forwardRef } from "react";
import {
  SelectRoot,
  createTexts,
  useTranslation,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValueText,
} from "..";
import { getSupportedCallingCodes } from "awesome-phonenumber";
import { ConditionalValue, Select } from "@chakra-ui/react";

const prioritizedCountryCodes = [
  { key: "+47", value: "+47" },
  { key: "+46", value: "+46" },
  { key: "+45", value: "+45" },
];

const sortedCallingCodes = getSupportedCallingCodes()
  .sort((a, b) => Number(a) - Number(b))
  .map((code) => ({
    key: `+${code}`,
    value: `+${code}`,
  }))
  .filter(
    (code) => !prioritizedCountryCodes.some((pCode) => pCode.key === code.key),
  );
export const callingCodes = [...prioritizedCountryCodes, ...sortedCallingCodes];

type CountryCodeSelectProps = Exclude<Select.RootProps, "variant"> & {
  variant?: ConditionalValue<"base" | "floating">;
};

export const CountryCodeSelect = forwardRef<
  HTMLDivElement,
  CountryCodeSelectProps
>((props, ref) => {
  const { variant } = props;
  const { t } = useTranslation();

  return (
    <SelectRoot variant={variant} {...props} ref={ref}>
      <SelectLabel>{t(texts.countryCode)}</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder={t(texts.countryCode)} />
      </SelectTrigger>
      <SelectContent>
        {callingCodes.map((code) => (
          <SelectItem key={code.key} item={code}>
            {code.key}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
});

export default CountryCodeSelect;

const texts = createTexts({
  countryCode: {
    nb: "Landkode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
});
