"use client";

import {
  Button,
  mergeRefs,
  useControllableState,
  Input,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { ButtonProps, InputGroup, InputGroupProps, InputProps } from "..";
import { createTexts, useTranslation } from "..";

export interface PasswordVisibilityProps {
  defaultVisible?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  visibilityIcon?: { on: React.ReactNode; off: React.ReactNode };
}

export interface PasswordInputProps
  extends InputProps,
    PasswordVisibilityProps {
  rootProps?: InputGroupProps;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const {
      rootProps,
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

    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
      <InputGroup
        width="full"
        startElement={startElement && startElement}
        label={label}
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
        {...rootProps}
      >
        <Input
          {...rest}
          ref={mergeRefs(ref, inputRef)}
          type={visible ? "text" : "password"}
          placeholder=" "
        />
      </InputGroup>
    );
  },
);

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
