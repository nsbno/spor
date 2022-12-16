import { Box, BoxProps, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { Node } from "@react-types/shared";
import React, { forwardRef, RefObject, useContext, useRef } from "react";
import { useListBox, useOption } from "react-aria";
import type { ListState } from "react-stately";

type ListBoxProps = AriaListBoxOptions<unknown> & {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
} & BoxProps;

type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
};

export const ListBox = forwardRef<HTMLUListElement, ListBoxProps>(
  (props, ref) => {
    const { state, ...rest } = props;
    const styles = useMultiStyleConfig("ListBox", {});
    const internalRef = useRef<HTMLUListElement>(null);
    const listBoxRef = (ref ?? internalRef) as RefObject<HTMLUListElement>;
    let { listBoxProps } = useListBox(props, state, listBoxRef);

    return (
      <Box
        as="ul"
        {...listBoxProps}
        sx={styles.container}
        ref={listBoxRef as RefObject<any>}
        {...rest}
      >
        {Array.from(state.collection).map((item) => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </Box>
    );
  }
);

type OptionContextValue = {
  labelProps: React.HTMLAttributes<HTMLElement>;
  descriptionProps: React.HTMLAttributes<HTMLElement>;
};

const OptionContext = React.createContext<OptionContextValue>({
  labelProps: {},
  descriptionProps: {},
});
const useOptionContext = () => {
  return useContext(OptionContext);
};

const Option = ({ item, state }: OptionProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const styles = useMultiStyleConfig("ListBox", {});
  const { optionProps, labelProps, descriptionProps } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <chakra.li {...optionProps} ref={ref} sx={styles.item}>
      <OptionContext.Provider value={{ labelProps, descriptionProps }}>
        {item.rendered}
      </OptionContext.Provider>
    </chakra.li>
  );
};

// The Label and Description components will be used within a <SelectItem>.
// They receive props from the OptionContext defined above.
// This ensures that the option is ARIA labelled by the label, and
// described by the description, which makes for better announcements
// for screen reader users.

export function SelectItemLabel({ children }: { children: React.ReactNode }) {
  let { labelProps } = useOptionContext();
  const styles = useMultiStyleConfig("ListBox", {});
  return (
    <Box {...labelProps} sx={styles.label}>
      {children}
    </Box>
  );
}

export function SelectItemDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  let { descriptionProps } = useOptionContext();
  const styles = useMultiStyleConfig("ListBox", {});
  return (
    <Box {...descriptionProps} sx={styles.description}>
      {children}
    </Box>
  );
}

export { Item as SelectItem } from "react-stately";
