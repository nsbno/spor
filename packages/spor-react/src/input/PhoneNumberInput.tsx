import { As, forwardRef, useControllableState } from "@chakra-ui/react";
import React from "react";
import { InfoSelect, Input, SelectItem, createTexts, useTranslation } from "..";
import { AttachedInputs } from "./AttachedInputs";

type CountryCodeAndPhoneNumber = {
  countryCode: string;
  phoneNumber: string;
};
type PhoneNumberInputProps = {
  /** The root name.
   *
   * Please note that when specifying the name, the rendered names will be `${name}-country-code` and `${name}-phone-number`, respectively
   */
  name?: string;
  /** Callback for when the country code or phone number changes */
  onChange?: (change: CountryCodeAndPhoneNumber) => void;
  /** The optional value of the country code and phone number */
  value?: CountryCodeAndPhoneNumber;
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
 * onChange={handleChange}
 * />
 * ```
 */
export const PhoneNumberInput = forwardRef<PhoneNumberInputProps, As>(
  (props, ref) => {
    const { t } = useTranslation();
    const [value, onChange] = useControllableState({
      value: props.value,
      onChange: props.onChange,
      defaultValue: { countryCode: "+47", phoneNumber: "" },
    });
    return (
      <AttachedInputs>
        <InfoSelect
          items={countryCodes}
          label={t(texts.countryCode)}
          isLabelSrOnly={true}
          value={value.countryCode}
          onChange={(countryCode) =>
            onChange({
              countryCode: countryCode as string,
              phoneNumber: value.phoneNumber,
            })
          }
        >
          {(item) => <SelectItem key={item.key}>{item.value}</SelectItem>}
        </InfoSelect>
        <Input
          ref={ref}
          label={t(texts.phoneNumber)}
          value={value.phoneNumber}
          onChange={(e) =>
            onChange({
              countryCode: value.countryCode,
              phoneNumber: e.target.value,
            })
          }
        />
      </AttachedInputs>
    );
  }
);

const texts = createTexts({
  countryCode: {
    nb: "Landkode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
  phoneNumber: {
    nb: "Telefonnummer",
    nn: "Telefonnummer",
    en: "Phone number",
    sv: "Telefonnummer",
  },
});

const countryCodes = new Array(100)
  .fill(null)
  .map((_, i) => ({ key: `+${i + 1}`, value: `+${i + 1}` }))
  .filter((item) => item.key !== "+47");
countryCodes.unshift({ key: "+47", value: "+47" });
