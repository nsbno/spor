import { Button, ButtonProps } from "./Button";
import { IconButton, IconButtonProps } from "./IconButton";

/**
 * For internal use
 */

type Props = IconButtonProps &
  Omit<ButtonProps, "leftIcon" | "rightIcon"> & {
    label: string;
  };

export const ResponsiveButton = ({ label, ...props }: Props) => {
  return (
    <>
      <Button display={["none", "flex"]} {...props} leftIcon={props.icon}>
        {label}
      </Button>
      <IconButton display={["flex", "none"]} aria-label={label} {...props} />
    </>
  );
};
