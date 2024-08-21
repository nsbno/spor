import React from "react";
import { BoxProps, InfoSelect, Item, createTexts, useTranslation } from "..";

import { getSupportedCallingCodes } from "awesome-phonenumber";

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
const callingCodes = [...prioritizedCountryCodes, ...sortedCallingCodes];

type CountryCodeSelectProps = {
  value: string;
  onChange: (value: string | number) => void;
  name: string;
  width?: BoxProps["width"];
  height?: BoxProps["height"];
  variant?: "base" | "floating";
};
export const CountryCodeSelect = (props: CountryCodeSelectProps) => {
  const { t } = useTranslation();

  return (
    <InfoSelect
      label={t(texts.countryCode)}
      isLabelSrOnly={true}
      items={callingCodes as any}
      variant={props.variant}
      {...props}
    >
      {(item: any) => <Item key={item.key}>{item.key}</Item>}
    </InfoSelect>
  );
};

export default CountryCodeSelect;

const texts = createTexts({
  countryCode: {
    nb: "Landkode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
});
