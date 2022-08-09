import { Flex } from "@chakra-ui/react";
import { AriaButtonProps } from "@react-aria/button";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import {
  ArrowLeftOutline24Icon,
  ArrowRightOutline24Icon,
} from "@vygruppen/spor-icon-react";
import { Heading } from "@vygruppen/spor-typography-react";
import React from "react";
import { MonthNavigationButton } from "./Button";

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
      <Heading as="h2" textStyle="sm" flex="1" textAlign="center">
        {title}
      </Heading>
      <MonthNavigationButton
        {...nextButtonProps}
        icon={<ArrowRightOutline24Icon />}
        aria-label={t(texts.nextMonth)}
      />
    </Flex>
  );
}

const texts = {
  previousMonth: {
    nb: "Forrige måned",
    sv: "Föregående månad",
    en: "Previous month",
  },
  nextMonth: {
    nb: "Neste måned",
    sv: "Nästa månad",
    en: "Next month",
  },
};
