"use client";
import { useControllableState } from "@chakra-ui/react";
import { forwardRef } from "react";

import { createTexts, Input, InputProps, useTranslation } from "..";
import { AttachedInputs } from "./AttachedInputs";
import { CountryCodeSelect } from "./CountryCodeSelect";

export type CountryCodeAndPhoneNumber = {
  countryCode: string;
  nationalNumber: string;
};

type PhoneNumberInputProps = Omit<InputProps, "value"> & {
  /** The label. Defaults to a localized version of "Phone number" */
  label?: string;
  /** Callback for when the country code or phone number changes */
  onValueChange?: (change: CountryCodeAndPhoneNumber) => void;
  /** The optional value of the country code and phone number */
  value?: CountryCodeAndPhoneNumber;
  /** Returns an extra optional text when true */
  optional?: boolean;
  allowedCountryCodes?: string[];
  invalid?: boolean;
  errorText?: string;
};
/**
 * A component for entering phone numbers.
 *
 * ```tsx
 * <PhoneNumberInput name="phone" />
 * ```
 *
 * > Please note that when specifying the name, the rendered names will be `${name}-country-code` and `${name}-phone-number` unless a name is provided for both countryCode and nationalNumber.
 *
 * The field can be controlled as well:
 * ```tsx
 * <PhoneNumberInput
 *   value={{ countryCode: '+47', phoneNumber: '81549300' }}
 *   onChange={handleChange}
 * />
 * ```
 */

export const PhoneNumberInput = forwardRef<
  HTMLInputElement,
  PhoneNumberInputProps
>((props, ref) => {
  const {
    label: externalLabel,
    value: externalValue,
    onValueChange: externalOnChange,
    variant,
    optional,
    allowedCountryCodes,
    invalid,
    errorText,
  } = props;

  const { t } = useTranslation();
  const label =
    externalLabel ??
    (optional ? t(texts.phoneNumberOptional) : t(texts.phoneNumber));

  const [value, onChange] = useControllableState({
    value: externalValue,
    onChange: externalOnChange,
    defaultValue: {
      countryCode: "+47",
      nationalNumber: "",
    },
  });

  const handleCountryCodeChange = (details: { value: string[] }) => {
    const countryCode = details.value[0];
    onChange({
      countryCode: countryCode,
      nationalNumber: value.nationalNumber,
    });
  };

  return (
    <AttachedInputs display="grid" gridTemplateColumns="1fr 10fr">
      <CountryCodeSelect
        value={[value.countryCode]}
        onValueChange={handleCountryCodeChange}
        height="100%"
        width="100%"
        minWidth="6.25rem"
        variant={variant}
        allowedCountryCodes={allowedCountryCodes}
        data-state="on"
        invalid={invalid}
      />
      <Input
        ref={ref}
        type="tel"
        {...props}
        value={value.nationalNumber}
        invalid={invalid}
        errorText={errorText}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          // Removes everything but numbers, spaces and dashes
          const strippedValue = target.value.replaceAll(/[^\d\s-]/g, "");
          onChange({
            countryCode: value.countryCode,
            nationalNumber: strippedValue,
          });
        }}
        variant={variant}
        data-state="on"
        label={label}
      />
    </AttachedInputs>
  );
});
PhoneNumberInput.displayName = "PhoneNumberInput";

const texts = createTexts({
  phoneNumber: {
    nb: "Telefonnummer",
    nn: "Telefonnummer",
    en: "Phone number",
    sv: "Telefonnummer",
  },
  phoneNumberOptional: {
    nb: "Telefonnummer (valgfritt)",
    nn: "Telefonnummer (valgfritt)",
    en: "Phone number (optional)",
    sv: "Telefonnummer (valfritt)",
  },
});
