import {
  Box,
  List,
  ListItem,
  useColorModeValue,
  useMultiStyleConfig,
  type BoxProps,
} from "@chakra-ui/react";
import type { Node } from "@react-types/shared";
import React, { useContext, useEffect, useRef } from "react";
import {
  AriaListBoxProps,
  useListBox,
  useListBoxSection,
  useOption,
} from "react-aria";
import { type ListState, type SelectState } from "react-stately";

export { Item, Section } from "react-stately";

type ListBoxProps<T> = AriaListBoxProps<T> &
  Omit<BoxProps, "filter" | "autoFocus" | "children"> & {
    /** External reference to the ListBox itself */
    listBoxRef: React.RefObject<HTMLUListElement>;
    /** Whether or not the listbox is waiting on new data, i.e. through a autosuggest search */
    isLoading?: boolean;
    /** The state of the listbox, provided externally somehow. */
    state: ListState<T> | SelectState<T>;
    /** UI to render if the collection is empty */
    emptyContent?: React.ReactNode;
    maxWidth?: BoxProps["maxWidth"];
  };

/**
 * A component that renders a list box with selectable options.
 *
 * @example
 * ```jsx
 * const options = [
 *   { id: 1, name: "Option 1" },
 *   { id: 2, name: "Option 2" },
 *   { id: 3, name: "Option 3" },
 * ];
 *
 * const state = useListState({ items: options });
 * const ref = useRef(null);
 *
 * return (
 *   <ListBox state={state} listBoxRef={ref}>
 *     {(option) => <div key={option.id}>{option.name}</div>}
 *   </ListBox>
 * );
 * ```
 *
 * @example
 * ```jsx
 * const { data, isLoading } = useSWR('/api/options')
 * const state = useListState({ items: data });
 * const ref = useRef(null);
 *
 * return (
 *   <ListBox state={state} isLoading={isLoading} ref={ref}>
 *     {(option) => <div key={option.id}>{option.name}</div>}
 *   </ListBox>
 * );
 * ```
 */
export function ListBox<T extends object>({
  isLoading,
  listBoxRef,
  state,
  maxWidth,
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
      maxWidth={maxWidth}
    >
      {state.collection.size === 0 && props.emptyContent}
      {Array.from(state.collection).map((item) =>
        item.type === "section" ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        ),
      )}
    </List>
  );
}

/**
 * Renders a label for a listbox item.
 *
 * Useful if you want to render a custom Item - especially if it has a description.
 */
export function ItemLabel({ children }: { children: React.ReactNode }) {
  let { labelProps } = useOptionContext();
  const styles = useMultiStyleConfig("ListBox", {});
  return (
    <Box {...labelProps} sx={styles.label}>
      {children}
    </Box>
  );
}

/**
 * Renders a description for an Item.
 *
 * Useful if you want to render a custom Item with more than just a label.
 */
export function ItemDescription({ children }: { children: React.ReactNode }) {
  let { descriptionProps } = useOptionContext();
  const styles = useMultiStyleConfig("ListBox", {});
  return (
    <Box {...descriptionProps} sx={styles.description}>
      {children}
    </Box>
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
    isFocusVisible,
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
  if (isFocusVisible) {
    dataFields["data-focus-visible"] = true;
  }

  /* 
  Workaround to fix click througs on mobile devices
  Related to https://github.com/adobe/react-spectrum/issues/4970
  TODO: Follow up with react-spectrum to see if they can solve it on their end
  */
  useEffect(() => {
    (ref as any)?.current?.addEventListener(
      "touchend",
      (event: TouchEvent) => {
        event.preventDefault();
      },
      { passive: false, once: true },
    );
  }, []);

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

type ListBoxSectionProps = {
  section: Node<unknown>;
  state: any;
};
function ListBoxSection({ section, state }: ListBoxSectionProps) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const isFirstSection = section.key === state.collection.getFirstKey();
  const titleColor = useColorModeValue("darkGrey", "white");
  return (
    <ListItem {...itemProps}>
      {section.rendered && (
        <Box
          fontSize="mobile.xs"
          color={titleColor}
          paddingX={3}
          paddingY={1}
          marginTop={isFirstSection ? 0 : 3}
          textTransform="uppercase"
          fontWeight="bold"
          {...headingProps}
        >
          {section.rendered}
        </Box>
      )}
      <List {...groupProps} padding={0} listStyleType="none">
        {Array.from(state.collection.getChildren(section.key)).map(
          (item: any) => (
            <Option key={item.key} item={item} state={state} />
          ),
        )}
      </List>
    </ListItem>
  );
}
