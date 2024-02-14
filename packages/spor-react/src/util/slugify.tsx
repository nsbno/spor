/**
 * Makes a slug-version of any string, with a maximum length of 50 characters
 **/
export function slugify(text: string | string[]): string {
  if (!text) {
    return text;
  }
  if (Array.isArray(text)) {
    text = text.join(" ");
  }
  return (
    text
      .normalize("NFD") // Normalize to NFD Unicode form
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/[\u00C6\u00E6]/g, "ae") // Replace Æ, æ
      .replace(/[\u00D8\u00F8]/g, "oe") // Replace Ø, ø
      .replace(/[\u00C5\u00E5]/g, "aa") // Replace Å, å
      // Extend the replacement rules as needed
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "")
      .substring(0, 50)
  );
}
