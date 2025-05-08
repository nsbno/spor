"use client";

import { Button, useControllableState } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import { ButtonProps, Input, InputProps } from "..";
import { createTexts, useTranslation } from "..";
import { InputGroupProps } from "./InputGroup";

export interface PasswordVisibilityProps {
  /** Default visibility state */
  defaultVisible?: boolean;
  /** Visibility state */
  visible?: boolean;
  /** Callback for when the visibility state changes */
  onVisibleChange?: (visible: boolean) => void;
}

export interface PasswordInputProps
  extends InputProps,
    PasswordVisibilityProps {
  rootProps?: InputGroupProps;
}

/**
 * A password input field with a visibility toggle.
 *
 * ```tsx
 * <PasswordInput label="Password" />
 * ```
 *
 * You can also control the visibility state:
 *
 * ```tsx
 * <PasswordInput label="Password" visible={visible} onVisibleChange={setVisible} />
 * ```
 *
 * You can also set the default visibility state:
 *
 * ```tsx
 * <PasswordInput label="Password" defaultVisible />
 * ```
 *
 * @see https://spor.vy.no/components/password-input
 */

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const {
      defaultVisible,
      visible: visibleProp,
      onVisibleChange,
      label,
      startElement,
      ...rest
    } = props;

    const [visible, setVisible] = useControllableState({
      value: visibleProp,
      defaultValue: defaultVisible || false,
      onChange: onVisibleChange,
    });

    const { t } = useTranslation();

    return (
      <Input
        ref={ref}
        startElement={startElement && startElement}
        label={label}
        type={visible ? "text" : "password"}
        endElement={
          <VisibilityTrigger
            variant="ghost"
            disabled={rest.disabled}
            onPointerDown={(e) => {
              if (rest.disabled) return;
              if (e.button !== 0) return;
              e.preventDefault();
              setVisible(!visible);
            }}
          >
            {visible ? t(texts.hidePassword) : t(texts.showPassword)}
          </VisibilityTrigger>
        }
        {...rest}
      />
    );
  },
);
PasswordInput.displayName = "PasswordInput";

const VisibilityTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        type="button"
        fontWeight="normal"
        size="sm"
        borderRadius="sm"
        marginRight={1}
        {...props}
      >
        {props.children}
      </Button>
    );
  },
);
VisibilityTrigger.displayName = "VisibilityTrigger";

const texts = createTexts({
  showPassword: {
    nb: "Vis",
    nn: "Vis",
    en: "Show",
    sv: "Visa",
  },
  hidePassword: {
    nb: "Skjul",
    nn: "Skjul",
    en: "Hide",
    sv: "Dölj",
  },
});
