import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

import { createTexts, useTranslation } from "@/i18n";

import { Select, SelectItem, SelectProps } from "./Select";

const prioritizedCountryCodes = [
  { label: "+47", value: "+47" },
  { label: "+46", value: "+46" },
  { label: "+45", value: "+45" },
];

// ITU-T E.164 calling codes (including non-geographic ones), in numeric order.
const callingCodes = [
  1, 7, 20, 27, 30, 31, 32, 33, 34, 36, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49,
  51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 81, 82, 84, 86,
  90, 91, 92, 93, 94, 95, 98, 211, 212, 213, 216, 218, 220, 221, 222, 223, 224,
  225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239,
  240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254,
  255, 256, 257, 258, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 290,
  291, 297, 298, 299, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 370,
  371, 372, 373, 374, 375, 376, 377, 378, 380, 381, 382, 383, 385, 386, 387,
  389, 420, 421, 423, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 590,
  591, 592, 593, 594, 595, 596, 597, 598, 599, 670, 672, 673, 674, 675, 676,
  677, 678, 679, 680, 681, 682, 683, 685, 686, 687, 688, 689, 690, 691, 692,
  800, 808, 850, 852, 853, 855, 856, 870, 878, 880, 881, 882, 883, 886, 888,
  960, 961, 962, 963, 964, 965, 966, 967, 968, 970, 971, 972, 973, 974, 975,
  976, 977, 979, 992, 993, 994, 995, 996, 998,
];

const sortedCallingCodes = callingCodes
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

export const CountryCodeSelect = ({
  ref,
  ...props
}: CountryCodeSelectProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
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
      size={props.size}
      role="combobox"
    >
      {filteredCallingCodes.items.map((code) => (
        <SelectItem key={code.label} item={code}>
          {code.label}
        </SelectItem>
      ))}
    </Select>
  );
};

const texts = createTexts({
  countryCode: {
    nb: "Landkode",
    nn: "Landskode",
    en: "Country code",
    sv: "Landskod",
  },
});
