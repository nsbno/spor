import { defineStyle, Field, FieldLabelProps } from "@chakra-ui/react";

export const Label = (props: FieldLabelProps) => (
  <Field.Label {...props} css={labelStyles} />
);

const labelStyles = defineStyle({
  fontWeight: "normal",
  paddingBottom: 1,
  paddingX: 1,
  fontSize: ["mobile.xs", "desktop.xs"],
  color: "text",
  pointerEvents: "none",
  zIndex: "docked",
  _disabled: {
    opacity: 0.4,
  },
});
