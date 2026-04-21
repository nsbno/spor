/* eslint-disable unicorn/no-array-callback-reference */
export const parser = "tsx";

export const tokenMap = {
  "bg.tertiary": "bg.brand",
  "bg.secondary": "bg.subtle",

  "accent.icon": "icon.accent",
  "accent.bg": "bg.accent",
  "brand.icon": "icon.brand",
  "alert.error-secondary.icon": "icon.caution",
  "core.icon": "icon.core",
  "alert.error.icon": "icon.critical",
  "floating.icon": "icon.floating",
  "ghost.icon": "icon.ghost",
  "alert.alt.icon": "icon.notice",
  "alert.success.icon": "icon.success",
  "alert.important.icon": "icon.warning",

  "alert.error-secondary.outline": "outline.caution",
  "alert.error-secondary.outline.hover": "outline.caution.hover",
  "core.outline": "outline.core",
  "core.outline.hover": "outline.core.hover",
  "alert.error.outline": "outline.critical",
  "alert.error.outline.hover": "outline.critical.hover",
  "floating.outline": "outline.floating",
  "floating.outline.hover": "outline.floating.hover",
  "alert.alt.outline": "outline.notice",
  "alert.alt.outline.hover": "outline.notice.hover",
  "alert.success.outline": "outline.success",
  "alert.success.outline.hover": "outline.success.hover",
  "alert.important.outline": "outline.warning",
  "alert.important.outline.hover": "outline.warning.hover",

  "alert.info.surface.active": "surface.info.active",
  "alert.info.surface": "surface.info",
  "surface.color.blue": "surface.info",
  "alert.info.surface.hover": "surface.info.hover",
  "alert.info.text.secondary": "text.info.subtle",
  "alert.info.outline.hover": "outline.info.hover",
  "alert.info.outline": "outline.info",
  "alert.info.text": "text.info",

  "accent.surface.active": "surface.accent.active",
  "accent.surface": "surface.accent",
  "accent.surface.hover": "surface.accent.hover",

  "brand.surface.active": "surface.brand.active",
  "brand.surface": "surface.brand",
  "brand.surface.hover": "surface.brand.hover",

  "alert.error-secondary.surface.active": "surface.caution.active",
  "alert.error-secondary.surface": "surface.caution",
  "surface.color.orange": "surface.caution",
  "alert.error-secondary.surface.hover": "surface.caution.hover",

  "core.surface.active": "surface.core.active",

  "alert.error.surface.active": "surface.critical.active",
  "alert.error.surface": "surface.critical",
  "surface.color.red": "surface.critical",
  "alert.error.surface.hover": "surface.critical.hover",
  "surface.tertiary": "surface.service",

  "floating.surface.active": "surface.floating.active",
  "floating.surface": "surface.floating",
  "floating.surface.hover": "surface.floating.hover",
  "floating.outline.active": "outline.neutral",

  "ghost.surface.active": "surface.ghost.active",
  "ghost.surface.hover": "surface.ghost.hover",

  "surface.color.grey": "surface.neutral",
  "surface.color.neutral": "surface.neutral",

  "alert.alt.surface.active": "surface.notice.active",
  "alert.alt.surface": "surface.notice",
  "surface.color.yellow": "surface.notice",
  "alert.alt.surface.hover": "surface.notice.hover",

  "surface.secondary": "surface.subtle",

  "alert.success.surface.active": "surface.success.active",
  "alert.success.surface": "surface.success",
  "surface.color.green": "surface.success",
  "alert.success.surface.hover": "surface.success.hover",

  "alert.important.surface.active": "surface.warning.active",
  "alert.important.surface": "surface.warning",
  "surface.color.cream": "surface.warning",
  "alert.important.surface.hover": "surface.warning.hover",

  "accent.text": "text.accent",
  "brand.text": "text.brand",
  "alert.error-secondary.text": "text.caution",
  "alert.error-secondary.text.secondary": "text.caution.subtle",
  "core.text": "text.core",
  "alert.error.text": "text.critical",
  "alert.error.text.secondary": "text.critical.subtle",
  "floating.text": "text.floating",
  "ghost.text": "text.ghost",
  "alert.alt.text": "text.notice",
  "alert.alt.text.secondary": "text.notice.subtle",
  "text.secondary": "text.highlight",
  "text.tertiary": "text.subtle",
  "alert.success.text": "text.success",
  "alert.success.text.secondary": "text.success.subtle",
  "alert.important.text": "text.warning",
  "alert.important.text.secondary": "text.warning.subtle",

  "badge.surface": "surface",
  "badge.text": "text",
  "badge.icon": "icon",
  "badge.green.surface": "surface.subtle",
  "badge.green.text": "text.success",
  "badge.green.icon": "icon.success",
  "badge.grey.surface": "surface.neutral",
  "badge.grey.text": "text.neutral",
  "badge.grey.icon": "icon.neutral",
  "badge.blue.surface": "surface.info",
  "badge.blue.text": "text.info",
  "badge.blue.icon": "icon.info",
  "badge.cream.surface": "surface.warning",
  "badge.cream.text": "text.warning",
  "badge.cream.icon": "icon.warning",
  "badge.yellow.surface": "surface.notice",
  "badge.yellow.text": "text.notice",
  "badge.yellow.icon": "icon.notice",
  "badge.orange.surface": "surface.caution",
  "badge.orange.text": "text.caution",
  "badge.orange.icon": "icon.caution",
  "badge.red.surface": "surface.critical",
  "badge.red.text": "text.critical",
  "badge.red.icon": "icon.critical",
  "text.inverted": "text.brand",
};

export default function transform(file, api) {
  if (file.path.includes("transform") || file.path.includes("codemod")) {
    return file.source;
  }
  const index = api.jscodeshift;
  const root = index(file.source);

  // eslint-disable-next-line unicorn/no-array-for-each
  root.find(index.Literal).forEach((path) => {
    const oldValue = path.node.value;
    if (Object.hasOwn(tokenMap, oldValue)) {
      const newValue = tokenMap[oldValue];
      console.log("Replacing literal", path.node.value, "with", newValue);
      path.node.value = newValue;
    }
  });

  return root.toSource();
}
