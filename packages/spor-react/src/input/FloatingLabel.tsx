import { defineStyle, Field, FieldLabelProps } from "@chakra-ui/react";

export const FloatingLabel = ({
  ref,
  ...props
}: FieldLabelProps & {
  ref?: React.RefObject<HTMLLabelElement | null>;
}) => <Field.Label ref={ref} {...props} css={floatingLabelStyles} />;

FloatingLabel.displayName = "FloatingLabel";

const floatingLabelStyles = defineStyle({
  paddingX: 3,
  fontWeight: "normal",
  pointerEvents: "none",
  zIndex: "docked",
  _disabled: {
    opacity: 0.4,
  },

  pos: "absolute",
  transition: "position",

  top: "0.9rem",
  color: "text",
  fontSize: ["mobile.sm", "desktop.sm"],

  "&[data-float]": {
    fontSize: ["mobile.xs", "desktop.xs"],
    color: "text",
    top: "0.3rem",
  },
});
