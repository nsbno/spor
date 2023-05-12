import {
  As,
  BoxProps,
  forwardRef,
  useControllableState,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import { InfoSelect, Input, SelectItem, createTexts, useTranslation } from "..";
import { AttachedInputs } from "./AttachedInputs";

type CountryCodeAndPhoneNumber = {
  countryCode: string;
  nationalNumber: string;
};
type PhoneNumberInputProps = BoxProps & {
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
 *   onChange={handleChange}
 * />
 * ```
 */
export const PhoneNumberInput = forwardRef<PhoneNumberInputProps, As>(
  (
    { name, value: externalValue, onChange: externalOnChange, ...boxProps },
    ref
  ) => {
    const { t } = useTranslation();
    const [value, onChange] = useControllableState({
      value: externalValue,
      onChange: externalOnChange,
      defaultValue: {
        countryCode: "+47",
        nationalNumber: "",
      },
    });
    return (
      <AttachedInputs {...boxProps}>
        <Suspense
          fallback={
            <InfoSelect
              isLabelSrOnly
              label=""
              width="6.25rem"
              height="100%"
              value="+47"
            >
              <SelectItem key="+47">+47</SelectItem>
            </InfoSelect>
          }
        >
          <LazyCountryCodeSelect
            value={value.countryCode}
            onChange={(countryCode) =>
              onChange({
                countryCode: countryCode as string,
                nationalNumber: value.nationalNumber,
              })
            }
            name={name ? `${name}-country-code` : "country-code"}
            height="100%"
            width="6.25rem"
          />
        </Suspense>
        <Input
          ref={ref}
          type="tel"
          label={t(texts.phoneNumber)}
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
          position="relative"
          left="-1px" // Makes the borders overlap
        />
      </AttachedInputs>
    );
  }
);

const texts = createTexts({
  phoneNumber: {
    nb: "Telefonnummer",
    nn: "Telefonnummer",
    en: "Phone number",
    sv: "Telefonnummer",
  },
});

const LazyCountryCodeSelect = React.lazy(() => import("./CountryCodeSelect"));
