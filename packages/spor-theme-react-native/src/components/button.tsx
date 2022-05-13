import { spacing } from "../foundations/spacing";
export const buttonVariants = {
  defaults: {
    borderWidth: 0,
    borderRadius: "xl",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    px: 3,
  },
  control: {
    backgroundColor: "darkTeal",
    color: "white",
  },
  primary: {
    backgroundColor: "primaryGreen",
    color: "white",
  },
  secondary: {
    backgroundColor: "coralGreen",
    color: "darkTeal",
  },
  tertiary: {
    backgroundColor: "mint",
    color: "darkGrey",
    fontWeight: "normal",
  },
  additional: {
    backgroundColor: "transparent",
    color: "darkGrey",
    fontWeight: "normal",
    borderWidth: 1,
    borderColor: "blackAlpha.400",
    borderStyle: "solid",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "darkGrey",
    fontWeight: "normal",
  },
  disabled: {
    backgroundColor: "silver",
    color: "white",
  },
};

export const buttonSizes = {
  defaults: {},
  lg: {
    height: spacing[8],
    minWidth: spacing[7],
    fontSize: 18,
  },
  md: {
    height: spacing[7],
    minWidth: spacing[7],
    fontSize: 18,
  },
  sm: {
    height: spacing[6],
    minWidth: spacing[6],
    fontSize: 16,
  },
  xs: {
    height: spacing[5],
    minWidth: spacing[5],
    fontSize: 16,
    px: 2,
  },
};
