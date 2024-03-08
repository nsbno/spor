import tokens from "@vygruppen/spor-design-tokens";

export type ColorsType = typeof tokens.color.alias &
  typeof tokens.color.palette &
  typeof tokens.color.vy & { linjetag: typeof tokens.color.linjetag };

export const colors: ColorsType = {
  ...tokens.color.alias,
  ...tokens.color.palette,
  ...tokens.color.vy, // TODO: This should be made work with different brands
  linjetag: tokens.color.linjetag,
};
