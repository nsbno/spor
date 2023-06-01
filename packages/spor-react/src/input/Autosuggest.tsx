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
   * Callback for when the selection changes.
   */
  onSelectionChange?: ComboboxProps<T>["onSelectionChange"];
} & Pick<
  InputProps,
  | "marginTop"
  | "marginBottom"
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
 */
export function Autosuggest<T extends object>({
  label,
  fetcher,
  children,
  onSelectionChange,
  ...boxProps
}: AutosuggestProps<T>) {
  const list = useAsyncList<T>({
    async load({ filterText }) {
      return {
        items: await fetcher(filterText),
      };
    },
  });
  return (
    <Combobox
      label={label}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      isLoading={list.isLoading}
      onSelectionChange={onSelectionChange}
      {...boxProps}
    >
      {children}
    </Combobox>
  );
}
