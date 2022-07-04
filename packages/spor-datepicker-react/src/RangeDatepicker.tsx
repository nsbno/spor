import { BoxProps } from "@chakra-ui/react";

export type RangeDatepickerProps = BoxProps & {
  startLabel?: string;
  startDate?: Date;
  endLabel?: string;
  endDate?: Date;
  onChange?: (args: { startDate: Date | null; endDate: Date | null }) => void;
  min?: Date;
  max?: Date;
};

export const RangeDatepicker = ({
  startLabel,
  startDate,
  endLabel,
  endDate,
  onChange,
  min,
  max,
}: RangeDatepickerProps) => {};
