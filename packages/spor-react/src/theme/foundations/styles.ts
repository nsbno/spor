import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    "html, body": {
      color: mode("darkGrey", "lightGrey")(props),
    },
    svg: {
      display: "initial",
    },
  }),
};
