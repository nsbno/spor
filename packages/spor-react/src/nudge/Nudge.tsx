"use client";
import { Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Button, ButtonGroup, createTexts, useTranslation } from "..";

export type NudgeProps = {
  /**
   * The ISO-formatted date of when the Nudge was introduced.
   *
   * After this date has been surpassed by 30 days, the nudge will no longer be shown,
   * and an error will be logged in development mode.
   *
   * ```tsx
   * <Nudge introducedDate="2024-02-19" {...otherProps} />
   * ```
   **/
  introducedDate: string;
  /**
   * The name of the nudge.
   * This will be used to check whether or not the nudge has been viewed.
   **/
  name: string;
  /**
   * The anchor of the nudge.
   *
   * The element that should be nudged toward.
   *
   * ```tsx
   * <Nudge content="This is a great new feature! Try it out.">
   *  <MyFeature />
   * </Nudge>
   * ```
   * */
  children: React.ReactNode;
  /**
   * The content of the nudge.
   */
  content: React.ReactNode;
  /**
   * Any actions you want to provide. Defaults to a close button and a "Show me" button.
   */
  actions?: React.ReactNode;
} & any; // todo - remove any

const EXPIRATION_DELAY = 1000 * 60 * 60 * 24 * 30; // 30 days

/** A nudge.
 *
 * A nudge is a way to hint of a new feature.
 *
 * You're required to set an `introducedDate` to the nudge, which is the timestamp of when the nudge was introduced. After 30 days, the nudge will no longer be shown, and an error will be logged in development mode.
 *
 * ```tsx
 * <Nudge
 *  introducedDate="2024-02-19"
 *  name="my-nudge"
 *  content="Check out this enormous new feature!"
 * >
 *   <StaticCard colorPalette="blue" padding={2} width="fit-content">My new feature</StaticCard>
 * </Nudge>
 * ```
 */

export const Nudge = forwardRef<HTMLDivElement, NudgeProps>(
  function Nudge(props, ref) {
    const { introducedDate, name, children, content, actions } = props;
    const { t } = useTranslation();
    if (new Date(introducedDate).getTime() + EXPIRATION_DELAY < Date.now()) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `The nudge ${name} has been used for longer than 30 days. Please remove it from the codebase.

          This is a development only warning, and will not be shown in production.`,
        );
      }
      return null;
    }

    return null; // Todo replace with new popover

    // return (
    // <PopoverRoot defaultOpen={true} {...props}>
    //   <PopoverTrigger>{children}</PopoverTrigger>
    //   <PopoverContent borderRadius="sm">
    //     <PopoverArrow />
    //     <PopoverCloseTrigger />
    //     <PopoverBody margin={1}>
    //       <Box marginRight={4}>{content}</Box>
    //       <Box marginTop={1.5}>
    //         {actions ?? (
    //           <ButtonGroup>
    //             <Button variant="tertiary" size="xs">
    //               {t(texts.close)}
    //             </Button>
    //             <Button variant="secondary" size="xs" fontWeight="bold">
    //               {t(texts.showMe)}
    //             </Button>
    //           </ButtonGroup>
    //         )}
    //       </Box>
    //     </PopoverBody>
    //   </PopoverContent>
    // </PopoverRoot>
    // );
  },
);

const texts = createTexts({
  close: {
    nb: "Lukk",
    nn: "Lukk",
    sv: "Stäng",
    en: "Close",
  },
  showMe: {
    nb: "Vis meg",
    nn: "Vis meg",
    sv: "Visa mig",
    en: "Show me",
  },
});
