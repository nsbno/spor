import { List as ChakraList } from "@chakra-ui/react";

/**
 * Use this component to display a list of items.
 *
 * props:
 * - "chidren" (default: none) required: The items in the list.
 * - "as" (default: "ul") not required: Rendrer as an ordered or unordered list.
 *     - "ul": Unordered list
 *     - "ol": Ordered list
 * - "variant" (default: "marker") not required: The style of the list.
 *    - "marker": A list with markers
 *    - "plain": A plain list without markers
 *
 * ```tsx
 * <List>
 *  <ListItem>Item 1</ListItem>
 *  <ListItem>Item 2</ListItem>
 * </List>
 */

export const List = ChakraList.Root; // <ul> or <ol> HTMLElement
export const ListItem = ChakraList.Item; // <li> HTMLElement
export const ListIndicator = ChakraList.Indicator;
