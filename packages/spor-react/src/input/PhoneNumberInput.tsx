import {
  BoxProps,
  ConditionalValue,
  FlexProps,
  Select,
  useControllableState,
} from "@chakra-ui/react";
import React, { forwardRef, Suspense } from "react";
import {
  SelectRoot,
  Input,
  createTexts,
  useTranslation,
  SelectLabel,
} from "..";
import { AttachedInputs } from "./AttachedInputs";

type CountryCodeAndPhoneNumber = {
  countryCode: string;
  nationalNumber: string;
};

type PhoneNumberInputProps = Omit<BoxProps, "onChange"> &
  FlexProps &
  Exclude<Select.RootProps, "variant"> & {
    /** The label. Defaults to a localized version of "Phone number" */
    label?: string;
    /** The root name.
     *
     * Please note that when specifying the name, the rendered names will be `${name}-country-code` and `${name}-phone-number`, respectively
     */
    name?: string;
    /** Callback for when the country code or phone number changes */
    onChange?: (change: CountryCodeAndPhoneNumber) => void;
    /** The optional value of the country code and phone number */
    value?: CountryCodeAndPhoneNumber;
    variant?: ConditionalValue<"base" | "floating">;
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
    onChange: externalOnChange,
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

  const handleCountryCodeChange = (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLSelectElement;
    const countryCode = target.value;
    onChange({
      countryCode: countryCode,
      nationalNumber: value.nationalNumber,
    });
  };
  return (
    <AttachedInputs {...boxProps}>
      <Suspense
        fallback={
          <SelectRoot
            width="6.25rem"
            height="100%"
            value={["+47"]}
            variant={variant}
            collection={collection}
          >
            <SelectLabel>+47</SelectLabel>
          </SelectRoot>
        }
      >
        <LazyCountryCodeSelect
          value={[value.countryCode]}
          collection={collection}
          onChange={handleCountryCodeChange}
          name={name ? `${name}-country-code` : "country-code"}
          height="100%"
          width="6.25rem"
          variant={variant}
        />
      </Suspense>
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
        position="relative"
        left="1px" // Makes the borders overlap
        variant={variant}
      />
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

const LazyCountryCodeSelect = React.lazy(() => import("./CountryCodeSelect"));
