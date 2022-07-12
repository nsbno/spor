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
    px: 0,
    // wrapt around content
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    borderWidth: 0,
    borderRadius: 0,
  },
};

export const buttonVariantsActive = {
  control: {
    backgroundColor: "#00685e",
  },
  primary: {
    backgroundColor: "#38b49e",
  },
  secondary: {
    backgroundColor: "#e5f4f1",
  },
  tertiary: {
    backgroundColor: "#F5F5F5",
  },
  additional: {
    backgroundColor: "#e5f4f1",
    borderColor: "#2b2b2c",
  },
  ghost: {
    backgroundColor: "#e5f4f1",
  },
};

export const buttonVariantsDisabled = {
  color: "#606568",
  backgroundColor: "#D7D8D9",
  borderWidth: 0,
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
