import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { badgeRecipie } from "../theme/components";

type BadgeVariantProps = RecipeVariantProps<typeof badgeRecipie>;

type BadgeColorPalette =
  | "yellow"
  | "light-yellow"
  | "red"
  | "light-green"
  | "dark-green"
  | "orange"
  | "light-blue"
  | "dark-blue"
  | "grey"
  | "white";

export type BadgeProps = Exclude<
  ChakraBadgeProps,
  "variant" | "colorPalette" | "size"
> &
  PropsWithChildren<BadgeVariantProps> & {
    /**
     * The color scheme of the badge.
     */
    colorPalette?: BadgeColorPalette;
    /** The design variant – "solid" by default.
     *
     * Can be specified as `outline` to render a border around the badge. */
    variant?: "solid" | "outline";
    /** Optional badge icon. Will be rendered to the left of the text.
     *
     * Make sure you pass in the 18px version of the icon.
     */
    icon?: React.ReactElement;
  };
/**
 * Shows some additional information about the component it's used within.
 *
 * You have to specify some content (icons should be placed to the left, if present), and a colorScheme.
 *
 * ```tsx
 * <Badge colorScheme="light-green">Hello</Badge>
 * ```
 *
 * If you want an icon, pass it in through the `icon` prop:
 *
 * ```tsx
 * <Badge colorScheme="light-blue" icon={<InformationOutline18Icon />}>
 *   Information
 * </Badge>
 * ```
 */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(props, ref) {
    const { icon, colorPalette = "grey", children, variant } = props;

    const recipe = useRecipe({ recipe: badgeRecipie });
    const styles = recipe({ variant, colorPalette });
    return (
      <ChakraBadge
        ref={ref}
        {...props}
        paddingLeft={icon ? 1 : undefined}
        css={styles}
      >
        {icon && React.cloneElement(icon, { marginRight: 1 })}
        {children}
      </ChakraBadge>
    );
  },
);
