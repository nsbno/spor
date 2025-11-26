// remove invisible/zero-width chars and normalize to lowercase
export function stripHiddenChars(input?: string) {
  if (!input) return "";
  return String(input)
    .replaceAll(/[\u200B-\u200F\uFEFF\u202A-\u202E]/g, "")
    .trim()
    .toLowerCase();
}

// remove invisible/zero-width unicode chars
export function removeZeroWidthChars(s: string) {
  return s.replaceAll(/[\u200B-\u200F\uFEFF\u202A-\u202E\u2060-\u206F]/g, "");
}

// sanitize internal href: decode percent-encodings, strip invisible chars, re-encode
export function sanitizeInternalHref(href: string) {
  try {
    // decode so multi-byte percent sequences become actual chars
    const decoded = decodeURIComponent(href);
    const cleaned = removeZeroWidthChars(decoded).trim();
    // encodeURI preserves normal URL punctuation while encoding unsafe chars
    return `/${encodeURI(cleaned)}`;
  } catch {
    // fallback: strip common zero-width percent-encoded sequences if decoding fails
    return `/${href.replaceAll(/(%e2%80%8b|%e2%80%8c|%ef%bb%bf|%e2%80%8d)/gi, "")}`;
  }
}
