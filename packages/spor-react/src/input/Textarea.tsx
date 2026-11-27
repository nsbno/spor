"use client";
import {
  Box,
  RecipeVariantProps,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  useRecipe,
} from "@chakra-ui/react";
import React, {
  PropsWithChildren,
  ReactNode,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { textareaRecipe } from "../theme/recipes/textarea";
import { Field, FieldProps } from "./Field";
import { useFloatingInputState } from "./useFLoatingInputState";
type TextareaVariants = RecipeVariantProps<typeof textareaRecipe>;
export type TextareaProps = Exclude<
  ChakraTextareaProps,
  "size" | "colorPalette"
> &
  FieldProps &
  PropsWithChildren<TextareaVariants> & {
    label: ReactNode;
  };
/**
 * Hook to calculate the height of the label element to adjust spacing for the input for floating label.
 */
const useLabelHeight = (label: ReactNode | undefined) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [labelHeight, setLabelHeight] = useState(0);
  useLayoutEffect(() => {
    const updateLabelHeight = () => {
      if (labelRef.current) {
        setLabelHeight(labelRef.current.offsetHeight);
      }
    };
    const observer = new ResizeObserver(updateLabelHeight);
    const currentLabelRef = labelRef.current;
    if (currentLabelRef) {
      observer.observe(currentLabelRef);
    }
    // Initial calculation with a slight delay to ensure CSS is applied
    setTimeout(updateLabelHeight, 0);
    return () => {
      if (currentLabelRef) {
        observer.unobserve(currentLabelRef);
      }
    };
  }, [label]);
  return { labelRef, labelHeight };
};

/** iOS (incl. iPadOS) doesn't render the native textarea resize handle. */
const noop = () => {};
const subscribe = () => noop;
const getIsIOS = () => {
  const { userAgent, maxTouchPoints } = navigator;
  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (userAgent.includes("Macintosh") && maxTouchPoints > 1)
  );
};
const getServerIsIOS = () => false;
const useIsIOS = () =>
  useSyncExternalStore(subscribe, getIsIOS, getServerIsIOS);

const ResizeHandle = ({
  textareaRef,
}: {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
}) => {
  const drag = useRef<{ startY: number; startHeight: number } | null>(null);

  const resizeBy = (delta: number) => {
    const textarea = textareaRef.current;
    if (!textarea || !drag.current) return;
    const minHeight = Number.parseFloat(getComputedStyle(textarea).minHeight) || 0;
    textarea.style.height = `${Math.max(minHeight, drag.current.startHeight + delta)}px`;
  };

  return (
    <Box
      aria-hidden="true"
      position="absolute"
      right="0.4rem"
      bottom="0.4rem"
      width="2.4rem"
      height="2.4rem"
      display="flex"
      alignItems="flex-end"
      justifyContent="flex-end"
      cursor="ns-resize"
      color="outline.core"
      style={{ touchAction: "none" }}
      onPointerDown={(event) => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        drag.current = {
          startY: event.clientY,
          startHeight: textarea.offsetHeight,
        };
      }}
      onPointerMove={(event) => {
        if (drag.current) resizeBy(event.clientY - drag.current.startY);
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
    >
      <svg viewBox="0 0 24 24" width="1.6rem" height="1.6rem" fill="none">
        <path
          d="M20 10 10 20M20 16l-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
};

export const Textarea = ({
  ref,
  ...props
}: TextareaProps & {
  ref?: React.Ref<HTMLTextAreaElement>;
}) => {
  const {
    label,
    variant = "core",
    invalid,
    required,
    errorText,
    readOnly,
    helperText,
    floatingLabel = true,
    ...restProps
  } = props;
  const recipe = useRecipe({ key: "textarea" });
  const styles = recipe({ variant });

  const { labelRef, labelHeight } = useLabelHeight(label);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => inputRef.current!, []);

  const { shouldFloat, handleFocus, handleBlur, handleChange, isControlled } =
    useFloatingInputState<HTMLTextAreaElement>({
      value: props.value,
      defaultValue: props.defaultValue,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onChange: props.onChange,
      inputRef: inputRef as React.RefObject<HTMLTextAreaElement>,
    });

  const labelId = useId();
  const isIOS = useIsIOS();

  return (
    <Field
      errorText={errorText}
      helperText={helperText}
      invalid={invalid}
      required={required}
      readOnly={readOnly}
      floatingLabel={floatingLabel}
      shouldFloat={shouldFloat}
      position="relative"
      label={
        <Box id={labelId}>
          <label ref={labelRef}>{label}</label>
        </Box>
      }
      id={restProps.id}
    >
      <Box position="relative" width="100%">
        <ChakraTextarea
          {...restProps}
          css={styles}
          className="peer"
          ref={inputRef}
          value={isControlled ? props.value : undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={
            { "--label-height": `${labelHeight}px` } as React.CSSProperties
          }
          placeholder=" "
          aria-labelledby={labelId}
        />
        {isIOS && !restProps.disabled && !readOnly && (
          <ResizeHandle textareaRef={inputRef} />
        )}
      </Box>
    </Field>
  );
};
