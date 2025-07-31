import type { PortableTextBlock } from "sanity";
/** Utility function to turn an array of portable text blocks to plain text
 *
 * Great for previews etc
 */
export function portableTextToText(blocks: PortableTextBlock[], opts = {}) {
  const options = Object.assign({}, { nonTextBehavior: "remove" }, opts);
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return options.nonTextBehavior === "remove"
          ? ""
          : `[${block._type} block]`;
      }

      return (block.children as any).map((child: any) => child.text).join("");
    })
    .join("\n\n");
}
