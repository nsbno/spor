"use client";

import {
  Box,
  chakra,
  defineRecipe,
  Group,
  GroupProps,
  IconButtonProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { ChangeDirectionOutline24Icon } from "@vygruppen/spor-icon-react";

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
  ) & {
    flipButtonProps?: Omit<
      IconButtonProps,
      | "icon"
      | "aria-label"
      | "onClick"
      | "variant"
      | "size"
      | "orientation"
      | "spinner"
    >;
  };

export const AttachedInputs = ({
  ref,
  flipButtonProps,
  ...props
}: AttachedInputsProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const recipe = useRecipe({ key: "attachedInputs" });
  const [recipeProps, { onFlip, flipAriaLabel, ...restProps }] =
    recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  if (!onFlip) {
    return (
      <Group ref={ref} css={styles} attached isolation="auto" {...restProps} />
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
        position="absolute"
        bg="bg"
        outlineWidth="1px"
        {...flipButtonProps}
      />
    </Box>
  );
};

const SwitchButton = chakra(
  IconButton,
  defineRecipe({
    base: {
      zIndex: "101",
      _focus: {
        outlineOffset: "0px",
        alignItems: "center",
      },
    },
    variants: {
      orientation: {
        horizontal: {
          top: "calc(50% - 1.1rem)",
          right: "calc(50% - 1.1rem)",
        },
        vertical: {
          top: "calc(50% - 1.1rem)",
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
