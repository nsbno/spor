import { ConditionalValue } from "@chakra-ui/react";

export type CalendarVariants = {
  variant?: ConditionalValue<"core" | "floating" | "ghost">;
  size?: ConditionalValue<"sm" | "md">;
};
