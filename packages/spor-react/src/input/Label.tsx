import { defineStyle, Field, FieldLabelProps } from "@chakra-ui/react";

export const Label = ({ css, ...props }: FieldLabelProps) => (
  <Field.Label {...props} css={[labelStyles, css]} />
);

const labelStyles = defineStyle({
  fontWeight: "normal",
  paddingBottom: 1,
  paddingX: 1,
  color: "text",
  pointerEvents: "none",
  zIndex: "docked",
  _disabled: {
    opacity: 0.4,
  },
});
