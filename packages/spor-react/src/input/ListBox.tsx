import {
  Box,
  List,
  ListItem,
  useMultiStyleConfig,
  type BoxProps,
} from "@chakra-ui/react";
import type { Node } from "@react-types/shared";
import React, { useContext, useRef } from "react";
import {
  AriaListBoxProps,
  useListBox,
  useListBoxSection,
  useOption,
  useSeparator,
} from "react-aria";
import { Item, type ListState, type SelectState } from "react-stately";

/** @deprecated use Item instead */
export const SelectItem = Item;
export { Item } from "react-stately";

type ListBoxProps<T> = AriaListBoxProps<T> &
  Omit<BoxProps, "filter" | "autoFocus" | "children"> & {
    listBoxRef: React.RefObject<HTMLUListElement>;
    isLoading?: boolean;
    state: ListState<T> | SelectState<T>;
  };

export function ListBox<T extends object>({
  isLoading,
  listBoxRef,
  state,
  ...props
}: ListBoxProps<T>) {
  const { listBoxProps } = useListBox(props, state, listBoxRef);
  const styles = useMultiStyleConfig("ListBox", {});

  return (
    <List
      {...listBoxProps}
      ref={listBoxRef}
      sx={styles.container}
      aria-busy={isLoading}
    >
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <Section key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        )
      )}
    </List>
  );
}

type OptionProps = {
  item: Node<unknown>;
  state: SelectState<any> | ListState<unknown>;
};
function Option({ item, state }: OptionProps) {
  const ref = useRef(null);
  const {
    optionProps,
    isSelected,
    isDisabled,
    isFocused,
    labelProps,
    descriptionProps,
  } = useOption({ key: item.key }, state, ref);

  const styles = useMultiStyleConfig("ListBox", {});
  let dataFields: Record<string, boolean> = {};
  if (isSelected) {
    dataFields["data-selected"] = true;
  }
  if (isDisabled) {
    dataFields["data-disabled"] = true;
  }
  if (isFocused) {
    dataFields["data-focus"] = true;
  }

  return (
    <OptionContext.Provider value={{ labelProps, descriptionProps }}>
      <ListItem {...optionProps} {...dataFields} ref={ref} sx={styles.item}>
        {item.rendered}
      </ListItem>
    </OptionContext.Provider>
  );
}

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

type SectionProps = {
  section: Node<unknown>;
  state: any;
};
export function Section({ section, state }: SectionProps) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const { separatorProps } = useSeparator({
    elementType: "li",
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <ListItem
          {...separatorProps}
          borderTop="1px solid gray"
          marginX={1}
          marginY={0.5}
        />
      )}
      <ListItem {...itemProps}>
        {section.rendered && (
          <Box
            as="span"
            fontWeight="bold"
            fontSize="sm"
            paddingX={1}
            paddingY={0.5}
            {...headingProps}
          >
            {section.rendered}
          </Box>
        )}
        <List {...groupProps} padding={0} listStyleType="none">
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </List>
      </ListItem>
    </>
  );
}

/**
 * Renders a label for a listbox item.
 *
 * Useful if you want to render a custom Item - especially if it has a description.
 */
export function SelectItemLabel({ children }: { children: React.ReactNode }) {
  let { labelProps } = useOptionContext();
  const styles = useMultiStyleConfig("ListBox", {});
  return (
    <Box {...labelProps} sx={styles.label}>
      {children}
    </Box>
  );
}
export const ItemLabel = SelectItemLabel;

/**
 * Renders a description for an Item.
 *
 * Useful if you want to render a custom Item with more than just a label.
 */
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
export const ItemDescription = SelectItemDescription;
