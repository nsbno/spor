import { Tooltip } from "@chakra-ui/react";
import React from "react";
import { TooltipProps } from "../tooltip";

export type NudgeProps = {
  introducedTimestamp: number;
  /** The name of the nudge */
  name: string;
} & Omit<TooltipProps, "name">;

const EXPIRATION_DURATION = 1000 * 60 * 60 * 24 * 30; // 30 days

/** A nudge.
 *
 * A nudge is a tooltip that is shown to the user to guide them through a new feature.
 */
export const Nudge = ({ introducedTimestamp, name, ...props }: NudgeProps) => {
  if (introducedTimestamp + EXPIRATION_DURATION > Date.now()) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `The nudge ${name} has been used for longer than 30 days. Please remove it from the codebase.
        
        This is a development only warning, and will not be shown in production.`,
      );
    }
    return null;
  }
  return <Tooltip {...props} />;
};
