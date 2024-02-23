import { getBoxShadowString } from "../utils/box-shadow-utils";

export function alertExpandableStyle(variant: string) {
  switch (variant) {
    case "info":
      return {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "sky",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "icyBlue",
        },
      };
    case "success":
      return {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "blueGreen",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "mint",
        },
      };
    case "warning":
      return {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "sunshine",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "cornSilk",
        },
      };
    case "alt-transport":
      return {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "golden",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "sunshine",
        },
      };
    case "error":
      return {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "apricot",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "pink",
        },
      };
  }
}
