import { defineStyle, Field, FieldLabelProps } from "@chakra-ui/react";

export const FloatingLabel = ({
  ref,
  css,
  ...props
}: FieldLabelProps & {
  ref?: React.Ref<HTMLLabelElement | null>;
}) => <Field.Label ref={ref} {...props} css={[floatingLabelStyles, css]} />;

const floatingLabelStyles = defineStyle({
  fontWeight: "normal",
  pointerEvents: "none",
  zIndex: "docked",
  _disabled: {
    opacity: 0.4,
  },
  pos: "absolute",
  transition: "top 160ms ease, font-size 160ms ease",
});
