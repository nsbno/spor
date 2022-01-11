import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

export type InputProps = ChakraInputProps & {
  /** The label of the input field */
  label: string;
  /** Element that's placed inside of the input field, to the left */
  leftElement?: React.ReactNode;
  /** Element that's placed inside of the input field, to the right */
  rightElement?: React.ReactNode;
};
/**
 * Input field with a floating label
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      onFocus = () => {},
      onBlur = () => {},
      leftElement = null,
      rightElement = null,
      isInvalid,
      isDisabled,
      ...inputProps
    },
    ref
  ) => {
    const [hasFocusOrContent, setFocusOrContent] = React.useState(
      Boolean(inputProps.value || inputProps.defaultValue)
    );

    React.useEffect(() => {
      setFocusOrContent(Boolean(inputProps.value));
    }, [inputProps.value]);

    const boxShadows = useBoxShadowColors({ isInvalid, isDisabled });

    return (
      <FormControl
        position="relative"
        borderRadius="sm"
        boxShadow={boxShadows.default}
        overflow="hidden"
        height="54px"
        _hover={{ boxShadow: boxShadows.hover }}
        _focusWithin={{ boxShadow: boxShadows.focus }}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        transition=".1s ease-out"
      >
        <FormLabel
          position="absolute"
          left={0}
          top={hasFocusOrContent ? "0" : "14px"}
          fontSize={hasFocusOrContent ? 14 : 18}
          transition=".1s ease-out"
          paddingLeft={leftElement ? "38px" : "16px"}
        >
          {label}
        </FormLabel>
        <InputGroup>
          {leftElement && (
            <InputLeftElement height="54px">{leftElement}</InputLeftElement>
          )}
          <ChakraInput
            border={0}
            _focus={{ outline: "none" }}
            position="relative"
            top={hasFocusOrContent ? "3px" : "0"}
            height="54px"
            fontSize="18px"
            paddingLeft={leftElement ? "38px" : "16px"}
            paddingRight={rightElement ? "5em" : "16px"}
            onFocus={(e) => {
              setFocusOrContent(true);
              onFocus(e);
            }}
            onBlur={(e) => {
              setFocusOrContent(e.target.value.length > 0);
              onBlur(e);
            }}
            ref={ref}
            {...inputProps}
          />
          {rightElement && (
            <InputRightElement height="54px" width="5em">
              {rightElement}
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    );
  }
);

type UseDefaultBoxShadowArgs = { isInvalid?: boolean; isDisabled?: boolean };
const useBoxShadowColors = ({
  isInvalid,
  isDisabled,
}: UseDefaultBoxShadowArgs) => {
  const theme = useTheme();
  if (isDisabled) {
    return {
      default: `inset 0 0 0 1px ${theme.colors.alias.platinum}`,
      hover: `inset 0 0 0 1px ${theme.colors.alias.platinum}`,
      focus: `inset 0 0 0 1px ${theme.colors.alias.platinum}`,
    };
  }
  if (isInvalid) {
    return {
      default: `inset 0 0 0 2px ${theme.colors.error.brightRed}`,
      hover: `inset 0 0 0 2px ${theme.colors.outline.darkGrey}`,
      focus: `inset 0 0 0 2px ${theme.colors.outline.greenHaze}`,
    };
  }
  return {
    default: `inset 0 0 0 1px ${theme.colors.outline.darkGrey}`,
    hover: `inset 0 0 0 2px ${theme.colors.outline.darkGrey}`,
    focus: `inset 0 0 0 2px ${theme.colors.outline.greenHaze}`,
  };
};
