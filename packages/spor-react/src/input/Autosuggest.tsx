import React from "react";
import { useAsyncList } from "react-stately";
import { Combobox, ComboboxProps, InputProps } from "../";

type AutosuggestProps<T> = {
  /** The label of the search field */
  label: string;
  /**
   * The function responsible for fetching new suggestion items, based on the query.
   *
   * This will typically be an API call to a backend service.
   *
   * @example
   * ```tsx
   * const fetcher = async (query?: string) => {
   *   const response = await fetch(`https://some.api.com/filter=${query}`);
   *   const json = await response.json();
   *   return json;
   * };
   * ```
   * */
  fetcher: (query?: string) => Promise<Iterable<T>>;
  /**
   * A render function that receives each item, and returns the UI for each item in the list.
   *
   * @example
   * ```tsx
   * <Autosuggest {...otherProps}>
   *  {(user) => (
   *    <Item key={user.id} textValue={user.fullName}>
   *       <ItemLabel>{user.fullName}</ItemLabel>
   *       <ItemDescription>{user.asl}</ItemDescription>
   *    </Item>
   *  )}
   * </Autosuggest>
   * ```
   *
   * You technically don't need to use the `<SelectItemLabel />` and `<SelectItemDescription />` components, but they are recommended to improve the accessibility of the search results. You can style them however you want, so there should never be a reason not to include at least the `<SelectItemLabel />` component. But who's judging?
   * */
  children: ComboboxProps<T>["children"];
  /**
   * Callback for when the selection changes. Returns the entire item.
   */
  onSelectionChange?: (item: T) => void;
  /** The selected item key (controlled) */
  selectedKey?: ComboboxProps<T>["selectedKey"];
  /** What should open the menu.
   *
   * Defaults to "input"
   */
  menuTrigger?: ComboboxProps<T>["menuTrigger"];
} & Pick<
  InputProps,
  | "marginTop"
  | "marginBottom"
  | "marginRight"
  | "marginLeft"
  | "marginY"
  | "marginX"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "paddingY"
  | "paddingX"
  | "leftIcon"
  | "rightIcon"
  | "borderTopRightRadius"
  | "borderTopLeftRadius"
  | "borderBottomRightRadius"
  | "borderBottomLeftRadius"
  | "onFocus"
>;
/**
 * A component that provides an autocomplete search field with suggestions.
 *
 * This component requires a `fetcher` prop, which is a function that receives a query string, and returns a list of items that match the query.
 *
 * @example
 * ```tsx
 * const fetcher = async (query?: string) => {
 *   const response = await fetch(`https://some.api.vy.no/filter=${query}`);
 *   const json = await response.json();
 *   return json;
 * };
 *
 * const Example = () => {
 *   return (
 *     <Autosuggest
 *       label="Search for users"
 *       fetcher={fetcher}
 *       onSelectionChange={(item) => console.log(item)}
 *     >
 *       {(user) => (
 *         <Item key={user.id} textValue={user.fullName}>
 *           <ItemLabel>{user.fullName}</ItemLabel>
 *           <ItemDescription>{user.asl}</ItemDescription>
 *         </Item>
 *       )}
 *     </Autosuggest>
 *   );
 * };
 * ```
 *
 * The `fetcher` function can be any function that returns an iterable of items. This means that you can use any API library you want, as long as it returns an iterable of items.
 *
 * The items need to have a `key` property, which is used to identify the item. The `key` property can be any type, but it needs to be unique for each item.
 *
 * ```tsx
 * [{ key: 'some-key', ...}, { key: 'some-other-key', ... }]
 * ```
 *
 * You can also return a set of nested items, which will be rendered as a sub-list (or section). This is useful if you want to group your items. These items need to have a title prop (for labelling the section), as well as a `children` prop, which in turn will contain an iterable of items:
 *
 * ```tsx
 * [
 *   {
 *    title: 'The title of the section',
 *    children: [{ key: 'some-key', ... }]
 *   },
 *   {...}
 * ]
 * ```
 *
 * The `onSelectionChanged` will return the correct `item` (the one with the matching `key`), even if the item is in a sub-list.
 */
export function Autosuggest<T extends object>({
  label,
  fetcher,
  onSelectionChange,
  ...props
}: AutosuggestProps<T>) {
  const list = useAsyncList<T>({
    async load({ filterText }) {
      return {
        items: await fetcher(filterText),
      };
    },
  });

  const handleSelectionChange = (key: React.Key) => {
    if (!onSelectionChange) {
      return;
    }

    let selectedItem = list.getItem(key);
    if (!selectedItem) {
      // If the item is not in the list, it might be in a sub-list
      selectedItem = list.items
        .flatMap((item) =>
          "children" in item && Array.isArray(item.children)
            ? item.children
            : []
        )
        .find((child) => child.key === key);
    }
    if (selectedItem) {
      onSelectionChange(selectedItem);
    }
  };
  return (
    <Combobox
      label={label}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      onSelectionChange={handleSelectionChange}
      isLoading={list.isLoading}
      {...props}
    />
  );
}
