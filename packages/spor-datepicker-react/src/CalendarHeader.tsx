import { Flex } from "@chakra-ui/react";
import { AriaButtonProps } from "@react-aria/button";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import {
  ArrowLeftOutline24Icon,
  ArrowRightOutline24Icon,
} from "@vygruppen/spor-icon-react";
import { Heading } from "@vygruppen/spor-typography-react";
import React from "react";
import { MonthNavigationButton } from "./MonthNavigationButton";

type CalendarHeaderProps = {
  title: string;
  previousButtonProps: AriaButtonProps<"button">;
  nextButtonProps: AriaButtonProps<"button">;
};
export function CalendarHeader({
  title,
  previousButtonProps,
  nextButtonProps,
}: CalendarHeaderProps) {
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" pb="4">
      <MonthNavigationButton
        {...previousButtonProps}
        icon={<ArrowLeftOutline24Icon />}
        aria-label={t(texts.previousMonth)}
      />
      <Heading
        as="div"
        role="heading"
        textStyle="sm"
        fontWeight="bold"
        flex="1"
        textAlign="center"
      >
        {capitalize(title)}
      </Heading>
      <MonthNavigationButton
        {...nextButtonProps}
        icon={<ArrowRightOutline24Icon />}
        aria-label={t(texts.nextMonth)}
      />
    </Flex>
  );
}

const capitalize = (str: string = "") =>
  str.charAt(0).toUpperCase() + str.slice(1);

const texts = createTexts({
  previousMonth: {
    nb: "Forrige måned",
    nn: "Forrige månad",
    sv: "Föregående månad",
    en: "Previous month",
  },
  nextMonth: {
    nb: "Neste måned",
    nn: "Neste månad",
    sv: "Nästa månad",
    en: "Next month",
  },
});
