"use client";
import { BoxProps, FlexProps, useControllableState } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Input, createTexts, useTranslation, SelectProps } from "..";
import { AttachedInputs } from "./AttachedInputs";
import { CountryCodeSelect } from "./CountryCodeSelect";

type CountryCodeAndPhoneNumber = {
  countryCode: string;
  nationalNumber: string;
};

type PhoneNumberInputProps = Omit<BoxProps, "onValueChange"> &
  FlexProps &
  Exclude<SelectProps, "variant"> & {
    /** The label. Defaults to a localized version of "Phone number" */
    label?: string;
    /** The root name.
     *
     * Please note that when specifying the name, the rendered names will be `${name}-country-code` and `${name}-phone-number`, respectively
     */
    name?: string;
    /** Callback for when the country code or phone number changes */
    onValueChange?: (change: CountryCodeAndPhoneNumber) => void;
    /** The optional value of the country code and phone number */
    value?: CountryCodeAndPhoneNumber;
    variant?: "core" | "floating";
    isOptional?: boolean;
    collection: Record<string, string>;
  };
/**
 * A component for entering phone numbers.
 *
 * ```tsx
 * <PhoneNumberInput name="phone" />
 * ```
 *
 * > Please note that when specifying the name, the rendered names will be `${name}-country-code` and `${name}-phone-number`, respectively
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
    name,
    value: externalValue,
    onValueChange: externalOnChange,
    variant,
    isOptional,
    collection,
    ...boxProps
  } = props;

  const { t } = useTranslation();
  const label =
    externalLabel ??
    (isOptional ? t(texts.phoneNumberOptional) : t(texts.phoneNumber));

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
    <AttachedInputs>
      <>
        <CountryCodeSelect
          value={[value.countryCode]}
          collection={collection}
          onValueChange={handleCountryCodeChange}
          name={name ? `${name}-country-code` : "country-code"}
          height="100%"
          width="6.25rem"
          variant={variant}
          data-state="on"
        />

        <Input
          ref={ref}
          type="tel"
          label={label}
          value={value.nationalNumber}
          name={name ? `${name}-phone-number` : "phone-number"}
          onChange={(e) => {
            // Removes everything but numbers, spaces and dashes
            const strippedValue = e.target.value.replace(/[^\d\s-]/g, "");
            onChange({
              countryCode: value.countryCode,
              nationalNumber: strippedValue,
            });
          }}
          variant={variant}
          data-state="on"
        />
      </>
    </AttachedInputs>
  );
});

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
  countryCodeLabel: {
    nb: "Landskode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
});
