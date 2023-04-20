import React from "react";
import {
  BoxProps,
  InfoSelect,
  SelectItem,
  createTexts,
  useTranslation,
} from "..";

import { getSupportedCallingCodes } from "awesome-phonenumber";

const callingCodes = getSupportedCallingCodes()
  .sort((a, b) => Number(a) - Number(b))
  .map((code) => ({
    key: `+${code}`,
    value: `+${code}`,
  }))
  .filter((code) => code.key !== "+47"); // We're adding Norway to the top
callingCodes.unshift({ key: "+47", value: "+47" }); // Norway

type CountryCodeSelectProps = {
  value: string;
  onChange: (value: string | number) => void;
  name: string;
  width?: BoxProps["width"];
  height?: BoxProps["height"];
};
export const CountryCodeSelect = (props: CountryCodeSelectProps) => {
  const { t } = useTranslation();

  return (
    <InfoSelect
      label={t(texts.countryCode)}
      isLabelSrOnly={true}
      items={callingCodes as any}
      {...props}
    >
      {(item) => <SelectItem key={item.key}>{item.key}</SelectItem>}
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
