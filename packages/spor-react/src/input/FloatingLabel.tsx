import { defineStyle, Field, FieldLabelProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const FloatingLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  (props, ref) => (
    <Field.Label ref={ref} {...props} css={floatingLabelStyles} />
  ),
);

FloatingLabel.displayName = "FloatingLabel";

const floatingLabelStyles = defineStyle({
  paddingX: 3,
  fontWeight: "normal",
  fontSize: ["mobile.xs", "desktop.xs"],
  color: "text",
  pointerEvents: "none",
  zIndex: "docked",
  _disabled: {
    opacity: 0.4,
  },

  pos: "absolute",
  top: "0.3rem",
  transition: "position",
  _peerPlaceholderShown: {
    /* For when input is not in focus */
    top: "0.9rem",
    color: "text",
    fontSize: ["mobile.sm", "desktop.sm"],
  },
  _peerFocusVisible: {
    /* For when input is in focus */
    fontSize: ["mobile.xs", "desktop.xs"],
    color: "text",
    top: "0.3rem",
  },
});
