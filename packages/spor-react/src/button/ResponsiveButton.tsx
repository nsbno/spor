import { Button, ButtonProps } from "./Button";
import { IconButton, IconButtonProps } from "./IconButton";

/**
 * For internal use
 */

type Props = IconButtonProps &
  Omit<ButtonProps, "leftIcon" | "rightIcon"> & {
    label: string;
  };

export const ResponsiveButton = ({ label, icon, ...props }: Props) => {
  return (
    <>
      <Button display={["none", "flex"]} leftIcon={icon} {...props}>
        {label}
      </Button>
      <IconButton
        display={["flex", "none"]}
        aria-label={label}
        icon={icon}
        {...props}
      />
    </>
  );
};
