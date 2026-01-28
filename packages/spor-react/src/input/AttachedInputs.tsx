"use client";

import {
  Box,
  chakra,
  defineRecipe,
  Group,
  GroupProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { ChangeDirectionOutline24Icon } from "@vygruppen/spor-icon-react";
import { forwardRef } from "react";

import { IconButton } from "@/button";
import { attachedInputsRecipe } from "@/theme/recipes/attached-inputs";

/**
 * Attaches several inputs together, so that they look like one input.
 *
 * ```tsx
 * <AttachedInputs>
 *   <Input />
 *   <NativeSelect>
 *     <Item />
 *   </NativeSelect>
 * </AttachedInputs>
 * ```
 */

export type AttachedInputsProps = RecipeVariantProps<
  typeof attachedInputsRecipe
> &
  GroupProps &
  (
    | {
        onFlip?: undefined;
        flipAriaLabel?: never;
      }
    | {
        onFlip: () => void;
        flipAriaLabel: string;
      }
  );

export const AttachedInputs = forwardRef<HTMLDivElement, AttachedInputsProps>(
  (props, ref) => {
    const recipe = useRecipe({ key: "attachedInputs" });
    const [recipeProps, { onFlip, flipAriaLabel, ...restProps }] =
      recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

    if (!onFlip) {
      return (
        <Group
          ref={ref}
          css={styles}
          attached
          isolation="auto"
          {...restProps}
        />
      );
    }

    return (
      <Box position="relative">
        <Group
          ref={ref}
          css={styles}
          attached
          isolation="auto"
          data-with-flip-button
          {...restProps}
        />
        <SwitchButton
          icon={<ChangeDirectionOutline24Icon />}
          orientation={props.orientation}
          variant="tertiary"
          size={["xs", null, "sm"]}
          aria-label={flipAriaLabel}
          onClick={onFlip}
        />
      </Box>
    );
  },
);

const SwitchButton = chakra(
  IconButton,
  defineRecipe({
    base: {
      position: "absolute !important",
      zIndex: "docked !important",
      // eslint-disable-next-line spor/use-semantic-tokens
      bg: "bg !important",
      outlineWidth: "1px !important",

      _focus: {
        outlineOffset: "0px !important",
      },
    },
    variants: {
      orientation: {
        horizontal: {
          top: "calc(50% - 18px)",
          right: "calc(50% - 18px)",
        },
        vertical: {
          top: "calc(50% - 15px)",
          right: "3rem",
          transform: "rotate(90deg)",
        },
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }),
);

AttachedInputs.displayName = "AttachedInputs";
