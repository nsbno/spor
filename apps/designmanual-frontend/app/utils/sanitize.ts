// remove invisible/zero-width chars and normalize to lowercase
export function stripHiddenChars(input?: string) {
  if (!input) return "";
  return String(input)
    .replaceAll(/[\u200B-\u200F\uFEFF\u202A-\u202E]/g, "")
    .trim()
    .toLowerCase();
}
