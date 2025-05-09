/**
 * Makes a slug-version of any string.
 *
 * By default, the maximum length of the slug is 50 characters. You can override this with the `maxLength` parameter.
 *
 * ```tsx
 * slugify("Hello, world!"); // hello-world
 * slugify("Hello, world!", 6); // hello-
 **/
export function slugify(text: string | string[], maxLength = 50): string {
  if (!text) {
    return text;
  }
  if (Array.isArray(text)) {
    text = text.join(" ");
  }
  if (maxLength < 1) {
    throw new Error("The maxLength parameter must be a positive number");
  }
  return (
    text
      .normalize("NFD") // Normalize to NFD Unicode form
      .replaceAll(/[\u0300-\u036F]/g, "") // Remove diacritics
      .replaceAll(/[\u00C6\u00E6]/g, "ae") // Replace Æ, æ
      .replaceAll(/[\u00D8\u00F8]/g, "oe") // Replace Ø, ø
      .replaceAll(/[\u00C5\u00E5]/g, "aa") // Replace Å, å
      // Extend the replacement rules as needed
      .toLowerCase()
      .replaceAll(/\s+/g, "-") // Replace spaces with -
      .replaceAll(/[^\w-]+/g, "") // Remove all non-word chars
      .replaceAll(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "")
      .slice(0, Math.max(0, maxLength))
  );
}
