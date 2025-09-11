export default {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforce the use of semantic color tokens in Chakra UI components to facilitate dark mode implementation.",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
    messages: {
      invalidToken:
        "Non semantic token token '{{ token }}' deteceted. Use semantic tokens like 'bg', 'text.secondary', 'core.surface.active', etc.",
    },
  },
  create(context) {
    const allowedTokens = new Set([
      "accent.bg",
      "accent.icon",
      "accent.surface",
      "accent.surface.active",
      "accent.surface.hover",
      "accent.text",
      "alert.alt.icon",
      "alert.alt.outline",
      "alert.alt.outline.hover",
      "alert.alt.surface",
      "alert.alt.surface.active",
      "alert.alt.surface.hover",
      "alert.alt.text",
      "alert.alt.text.secondary",
      "alert.error-secondary.icon",
      "alert.error-secondary.outline",
      "alert.error-secondary.outline.hover",
      "alert.error-secondary.surface",
      "alert.error-secondary.surface.active",
      "alert.error-secondary.surface.hover",
      "alert.error-secondary.text",
      "alert.error-secondary.text.secondary",
      "alert.error.icon",
      "alert.error.outline",
      "alert.error.outline.hover",
      "alert.error.surface",
      "alert.error.surface.active",
      "alert.error.surface.hover",
      "alert.error.text",
      "alert.error.text.secondary",
      "alert.important.icon",
      "alert.important.outline",
      "alert.important.outline.hover",
      "alert.important.surface",
      "alert.important.surface.active",
      "alert.important.surface.hover",
      "alert.important.text",
      "alert.important.text.secondary",
      "alert.info.icon",
      "alert.info.outline",
      "alert.info.outline.hover",
      "alert.info.surface",
      "alert.info.surface.active",
      "alert.info.surface.hover",
      "alert.info.text",
      "alert.info.text.secondary",
      "alert.neutral.icon",
      "alert.neutral.outline",
      "alert.neutral.outline.hover",
      "alert.neutral.surface",
      "alert.neutral.surface.active",
      "alert.neutral.surface.hover",
      "alert.neutral.text",
      "alert.neutral.text.secondary",
      "alert.service.icon",
      "alert.service.outline",
      "alert.service.outline.hover",
      "alert.service.surface",
      "alert.service.surface.active",
      "alert.service.surface.hover",
      "alert.service.text",
      "alert.service.text.secondary",
      "alert.success.icon",
      "alert.success.outline",
      "alert.success.outline.hover",
      "alert.success.surface",
      "alert.success.surface.active",
      "alert.success.surface.hover",
      "alert.success.text",
      "alert.success.text.secondary",
      "bg",
      "bg.secondary",
      "bg.tertiary",
      "brand.icon",
      "brand.surface",
      "brand.surface.active",
      "brand.surface.hover",
      "brand.text",
      "core.icon",
      "core.outline",
      "core.outline.hover",
      "core.surface.active",
      "core.text",
      "floating.icon",
      "floating.outline",
      "floating.outline.active",
      "floating.outline.hover",
      "floating.surface",
      "floating.surface.active",
      "floating.surface.hover",
      "floating.text",
      "ghost.icon",
      "ghost.surface.active",
      "ghost.surface.hover",
      "ghost.text",
      "icon",
      "icon.disabled",
      "icon.highlight",
      "icon.inverted",
      "icon.secondary",
      "outline",
      "outline.disabled",
      "outline.error",
      "outline.focus",
      "outline.inverted",
      "surface",
      "surface.color.blue",
      "surface.color.cream",
      "surface.color.green",
      "surface.color.grey",
      "surface.color.neutral",
      "surface.color.orange",
      "surface.color.red",
      "surface.color.yellow",
      "surface.disabled",
      "surface.secondary",
      "surface.tertiary",
      "text",
      "text.disabled",
      "text.highlight",
      "text.inverted",
      "text.secondary",
      "text.tertiary",
    ]);

    // props on JSX elements which often carry colors
    const colorProps = new Set([
      "bg",
      "background",
      "backgroundColor",
      "color",
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
      "fill",
      "stroke",
    ]);

    function isColorProp(propName) {
      if (!propName || typeof propName !== "string") return false;
      return colorProps.has(propName);
    }

    const hexRegex = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;
    const rgbRegex = /rgba?\([^)]+\)/gi;
    const hslRegex = /hsla?\([^)]+\)/gi;

    // List of allowed non-semantic color values
    const allowedNonSemanticColors = new Set([
      "transparent",
      "inherit",
      "currentColor",
    ]);

    function extractColorsFromString(str) {
      if (typeof str !== "string") return [];
      const results = new Set();
      let m;
      while ((m = hexRegex.exec(str))) results.add(m[0]);
      while ((m = rgbRegex.exec(str))) results.add(m[0]);
      while ((m = hslRegex.exec(str))) results.add(m[0]);
      // Removed colorNameRegex usage
      return [...results];
    }

    function reportInvalidToken(nodeForReport, token) {
      if (allowedNonSemanticColors.has(token)) return; // allow listed non-semantic colors
      context.report({
        node: nodeForReport,
        messageId: "invalidToken",
        data: { token },
      });
    }

    // Walk object expressions (JSX style objects, recipe objects, etc.)
    function traverseObjectExpression(objNode) {
      if (!objNode || objNode.type !== "ObjectExpression") return;
      for (const prop of objNode.properties || []) {
        if (!prop) continue;
        if (prop.type === "Property") {
          // obtain key name
          let keyName = null;
          const key = prop.key;
          if (!key) continue;
          if (key.type === "Identifier") keyName = key.name;
          else if (key.type === "Literal" || key.type === "StringLiteral")
            keyName = String(key.value);
          else if (
            key.type === "TemplateLiteral" &&
            (key.expressions || []).length === 0
          ) {
            keyName = key.quasis
              .map((q) => (q.value ? q.value.cooked : ""))
              .join("");
          }
          if (!keyName) {
            // computed/unreliable key — still traverse value if it's an object
            if (prop.value && prop.value.type === "ObjectExpression")
              traverseObjectExpression(prop.value);
            continue;
          }

          const normalizedKey = keyName.replaceAll(/-([a-z])/g, (_, c) =>
            c.toUpperCase(),
          );

          // Always walk into nested object values
          if (prop.value && prop.value.type === "ObjectExpression") {
            traverseObjectExpression(prop.value);
          }

          // If the key looks like a color prop or something that may contain color values
          if (
            isColorProp(normalizedKey) ||
            /^(background|border|color|fill|stroke)$/i.test(normalizedKey)
          ) {
            const val = prop.value;
            if (!val) continue;

            // direct literal string -> either exact token or a string containing color (e.g. "1px solid red")
            if (val.type === "Literal" || val.type === "StringLiteral") {
              const v = val.value;
              if (typeof v === "string") {
                const token = v.trim();
                // If the entire value equals a semantic token, allow it
                if (!allowedTokens.has(token)) {
                  // Try extracting color substrings (hex, rgb, names)
                  const colors = extractColorsFromString(token);
                  if (colors.length > 0) {
                    for (const c of colors) {
                      reportInvalidToken(val, c);
                    }
                  } else {
                    // report the whole string because it's still not an allowed token
                    reportInvalidToken(val, token);
                  }
                }
              }
            } else {
              // for expressions, collect any static string literals
              const found = collectStringLiterals(val, []);
              for (const f of found) {
                const token = (f.value || "").trim();
                if (!allowedTokens.has(token)) {
                  // if the string includes composite values, try to extract embedded colors
                  const colors = extractColorsFromString(token);
                  if (colors.length > 0) {
                    for (const c of colors) reportInvalidToken(f.node, c);
                  } else {
                    reportInvalidToken(f.node, token);
                  }
                }
              }
            }
          }
        } else if (prop.type === "SpreadElement") {
          // We cannot statically inspect spreaded objects reliably; skip
          continue;
        }
      }
    }

    // Check JSX attributes and specially handle css/sx/style attributes
    function checkJSXAttributes(node) {
      for (const attribute of node.attributes || []) {
        if (!attribute || attribute.type !== "JSXAttribute") continue;
        if (!attribute.name || !attribute.name.type) continue;
        const propName = attribute.name.name;

        // Direct color prop on element: color="red" OR color={"red"} OR color={cond ? "red" : "blue"}
        if (isColorProp(propName)) {
          if (!attribute.value) continue; // boolean prop or <Box disabled />
          // literal e.g. color="red"
          if (
            attribute.value.type === "Literal" ||
            attribute.value.type === "StringLiteral"
          ) {
            const val = attribute.value.value;
            if (typeof val === "string" && !allowedTokens.has(val.trim())) {
              // If string contains composite color, extract colors
              const colors = extractColorsFromString(val);
              if (colors.length > 0) {
                for (const c of colors) reportInvalidToken(attribute.value, c);
              } else {
                reportInvalidToken(attribute.value, val.trim());
              }
            }
          } else if (attribute.value.type === "JSXExpressionContainer") {
            const expr = attribute.value.expression;
            // simple literal inside expression: color={"red"}
            if (
              expr &&
              (expr.type === "Literal" || expr.type === "StringLiteral") &&
              typeof expr.value === "string"
            ) {
              const token = expr.value.trim();
              if (!allowedTokens.has(token)) {
                const colors = extractColorsFromString(token);
                if (colors.length > 0) {
                  for (const c of colors) reportInvalidToken(expr, c);
                } else {
                  reportInvalidToken(expr, token);
                }
              }
            } else {
              // conditional / logical / array / template -> collect static strings
              const found = collectStringLiterals(expr, []);
              for (const f of found) {
                const token = (f.value || "").trim();
                if (!allowedTokens.has(token)) {
                  const colors = extractColorsFromString(token);
                  if (colors.length > 0) {
                    for (const c of colors) reportInvalidToken(f.node, c);
                  } else {
                    reportInvalidToken(f.node, token);
                  }
                }
              }
            }
          }
        }

        // Handle style-like object props: css, sx, style
        if (propName === "css" || propName === "sx" || propName === "style") {
          if (!attribute.value) continue;
          if (attribute.value.type === "JSXExpressionContainer") {
            const expr = attribute.value.expression;
            if (expr && expr.type === "ObjectExpression") {
              traverseObjectExpression(expr);
            } else if (
              expr &&
              (expr.type === "Literal" || expr.type === "StringLiteral") &&
              typeof expr.value === "string"
            ) {
              // css="background: red;" (string) -> look for color names or hex/rgb
              const colors = extractColorsFromString(expr.value);
              for (const c of colors) reportInvalidToken(attribute.value, c);
            }
          } else if (
            attribute.value.type === "Literal" ||
            attribute.value.type === "StringLiteral"
          ) {
            // css="background: red;"
            const val = attribute.value.value;
            if (typeof val === "string") {
              const colors = extractColorsFromString(val);
              for (const c of colors) reportInvalidToken(attribute.value, c);
            }
          }
        }

        // Handle Chakra UI pseudo-style props like _hover, _active, etc.
        if (typeof propName === "string" && propName.startsWith("_")) {
          if (!attribute.value) continue;
          if (attribute.value.type === "JSXExpressionContainer") {
            const expr = attribute.value.expression;
            if (expr && expr.type === "ObjectExpression") {
              traverseObjectExpression(expr);
            }
          }
        }
      }
    }

    // Look for defineRecipe/defineStyle calls and traverse their object argument
    const recipeFns = new Set([
      "defineRecipe",
      "defineStyle",
      "defineStyleConfig",
    ]);

    return {
      JSXOpeningElement(node) {
        try {
          checkJSXAttributes(node);
        } catch {
          // fail-safe: don't crash eslint if an unexpected node shape occurs
          // console.error && console.error("eslint rule: chakra-semantic-tokens error", e);
        }
      },

      CallExpression(node) {
        try {
          const callee = node.callee;
          if (
            callee &&
            callee.type === "Identifier" &&
            recipeFns.has(callee.name)
          ) {
            const arg = node.arguments && node.arguments[0];
            if (arg && arg.type === "ObjectExpression") {
              traverseObjectExpression(arg);
            }
          }
        } catch {
          /* ignore */
        }
      },

      // Also, top-level object literal exports like export default { ... } where someone may define styles
      // This is best-effort — only inspects object expressions in export default / variable initializers
      ExportDefaultDeclaration(node) {
        try {
          const decl = node.declaration;
          if (decl && decl.type === "ObjectExpression")
            traverseObjectExpression(decl);
        } catch {
          // intentionally ignored
        }
      },

      VariableDeclarator(node) {
        try {
          if (node.init && node.init.type === "ObjectExpression")
            traverseObjectExpression(node.init);
        } catch {
          // intentionally ignored
        }
      },
    };
  },
};

// Collect string literals from expressions like conditional or logical expressions.
function collectStringLiterals(node, collected = [], depth = 0) {
  if (!node || depth > 12) return collected;
  const t = node.type;

  if (t === "Literal" || t === "StringLiteral") {
    if (typeof node.value === "string") {
      collected.push({ value: node.value, node });
    }
    return collected;
  }

  if (t === "TemplateLiteral") {
    // Only if it's a static template without expressions (`` `red` ``)
    if ((node.expressions || []).length === 0) {
      const s = node.quasis
        .map((q) => (q.value ? q.value.cooked : ""))
        .join("");
      collected.push({ value: s, node });
    }
    return collected;
  }

  if (t === "ConditionalExpression") {
    collectStringLiterals(node.consequent, collected, depth + 1);
    collectStringLiterals(node.alternate, collected, depth + 1);
    return collected;
  }

  if (t === "LogicalExpression" || t === "BinaryExpression") {
    collectStringLiterals(node.left, collected, depth + 1);
    collectStringLiterals(node.right, collected, depth + 1);
    return collected;
  }

  if (t === "ArrayExpression") {
    for (const el of node.elements || [])
      collectStringLiterals(el, collected, depth + 1);
    return collected;
  }

  if (t === "ObjectExpression") {
    // collect from property values
    for (const p of node.properties || []) {
      if (p && p.type === "Property")
        collectStringLiterals(p.value, collected, depth + 1);
    }
    return collected;
  }

  // other node types (Identifier, CallExpression, MemberExpression, etc.) cannot be resolved statically
  return collected;
}
