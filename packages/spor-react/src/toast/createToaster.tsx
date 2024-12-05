import { createToaster as createChakraToast } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { ActionToast } from "./ActionToast";
import { BaseToast, BaseToastProps } from "./BaseToast";
import { ClosableToast } from "./ClosableToast";

type ClosableToastOptions = {
  closable: true;
  /** Callback for when the close button is clicked */
  close?: () => void;
};

type ActionToastOptions = {
  closable?: false;
  /** Callback for when the button is clicked */
  onClick: () => void;
  /** The button text */
  buttonText: string;
};

type BaseToastOptions = {
  /** How the toast looks */
  variant: BaseToastProps["variant"];
  /** The content of the toast. Keep it short! */
  text: string;
  /**
   * Number of milliseconds to show the toast.
   *
   * Defaults to 6000.
   */
  duration?: number;
};

export type ToastOptions = BaseToastOptions &
  (ClosableToastOptions | ActionToastOptions | {});

/**
 * Creates a function that can trigger toasts
 *
 * ```tsx
 * const toast = useToast();
 * return (
 *   <Button
 *     onClick={() =>
 *        toast({ text: "Hello world", variant: "info" })
 *     }
 *   >
 *    Click me
 *   </Button>
 * ```
 */
export const createToaster = () => {
  const toast = createChakraToast();
  const wrappedToast = useCallback((opts: ToastOptions) => {
    const Toast = getToastComponent(opts);
    toast({
      ...opts,
      render: Toast,
    });
  }, []);
  return wrappedToast;
};

type RenderArgs = { close: () => void; id: string };
const getToastComponent = (opts: ToastOptions) => {
  if ("closable" in opts && opts.closable) {
    return ({ close, id }: RenderArgs) => (
      <ClosableToast
        id={id}
        variant={opts.variant}
        close={() => {
          if (opts.close) {
            opts.close();
          }
          close();
        }}
      >
        {opts.text}
      </ClosableToast>
    );
  }
  if ("buttonText" in opts) {
    return ({ id }: RenderArgs) => (
      <ActionToast
        id={id}
        variant={opts.variant}
        buttonText={opts.buttonText}
        onClick={opts.onClick}
      >
        {opts.text}
      </ActionToast>
    );
  }
  return ({ id }: RenderArgs) => (
    <BaseToast id={id} variant={opts.variant}>
      {opts.text}
    </BaseToast>
  );
};
