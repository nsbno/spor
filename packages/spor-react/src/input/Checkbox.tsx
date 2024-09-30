import {
  Box,
  chakra,
  useCheckbox,
  useMultiStyleConfig,
  CheckboxProps as ChakraCheckboxProps,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { forwardRef, useId, useState } from "react";

type CheckboxProps = ChakraCheckboxProps & {
  label?: string;
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      id,
      checked = false,
      onChange,
      children,
      defaultChecked,
      ...rest
    } = props;
    const [isChecked, setIsChecked] = useState(checked || defaultChecked);
    const checkboxId = id || `checkbox-${useId()}`; // Remove extra curly brace

    // Chakra UI hooks to manage state
    const { getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);
    const styles = useMultiStyleConfig("Checkbox", {});

    const handleClick = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      if (onChange) {
        onChange(newChecked);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleClick();
      }
    };

    return (
      <Box sx={styles.container} {...htmlProps}>
        <input {...getInputProps()} id={checkboxId} ref={ref} hidden />
        <Flex
          role="checkbox"
          aria-checked={isChecked}
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          __css={styles.control}
          {...getCheckboxProps()}
          {...rest}
        >
          {isChecked && (
            <chakra.span>
              <svg
                className="checkmark"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <motion.path
                  d="M14 27 L22 34 L38 16"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: isChecked ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </svg>
            </chakra.span>
          )}
        </Flex>
        {(label || children) && (
          <chakra.label
            {...getLabelProps()}
            htmlFor={checkboxId}
            __css={styles.label}
          >
            {label || children}
          </chakra.label>
        )}
      </Box>
    );
  },
);
