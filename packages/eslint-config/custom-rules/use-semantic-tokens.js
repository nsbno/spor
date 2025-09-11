import fs from "node:fs";
import path from "node:path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Function to recursively extract token paths from the JSON
function extractTokenPaths(obj, prefix = "") {
  const tokens = [];

  for (const [key, value] of Object.entries(obj)) {
    // Handle 'DEFAULT' key by not appending it to the path
    const currentKey = key === "DEFAULT" ? "" : key;
    const currentPath =
      prefix && currentKey ? `${prefix}.${currentKey}` : prefix || currentKey;

    if (typeof value === "object" && value !== null) {
      tokens.push(...extractTokenPaths(value, currentPath));
      continue;
    }

    // Add the token path, stripping '_light' or '_dark' suffixes
    const cleanPath = currentPath.replace(/(\._light|\._dark)$/, "");
    if (!cleanPath) continue;
    tokens.push(cleanPath);
  }

  return tokens;
}

// Function to get tokens from vyDigital and linjetag
function getTokens(json) {
  const allTokens = new Set();

  // Process vyDigital section without theme prefix
  const vyDigitalTokens = extractTokenPaths(json.color.vyDigital, "");
  for (const token of vyDigitalTokens) allTokens.add(token);

  // Process linjetag section with linjetag prefix
  const linjetagTokens = extractTokenPaths(json.color.linjetag, "linjetag");
  for (const token of linjetagTokens) allTokens.add(token);

  return allTokens;
}

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
        "Non semantic token '{{ token }}' detected. Use semantic tokens like 'bg', 'text.secondary', 'core.surface.active', etc.",
    },
  },
  create(context) {
    const tokensJSON = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../../spor-design-tokens/dist/tokens.json"),
        "utf8",
      ),
    );
    const allowedTokens = getTokens(tokensJSON);

    // props on JSX elements which often carry colors
    const colorProps = new Set([
      // Background
      "bg",
      "background",
      "backgroundColor",
      "bgColor",
      "backgroundImage",
      "backgroundGradient",
      "bgGradient",

      // Borders
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",

      // Text
      "color",
      "textColor",

      // Shadows / Rings / Outlines
      "boxShadow",
      "shadowColor",
      "ringColor",
      "outlineColor",

      // Caret & Selection
      "caretColor",
      "_selection",

      // Accent
      "accentColor",
    ]);

    function isColorProp(propName) {
      if (!propName || typeof propName !== "string") return false;
      return colorProps.has(propName);
    }

    // List of allowed non-semantic color values
    const allowedNonSemanticColors = new Set([
      "transparent",
      "inherit",
      "currentColor",
    ]);

    function reportInvalidToken(nodeForReport, token) {
      context.report({
        node: nodeForReport,
        messageId: "invalidToken",
        data: { token },
      });
    }

    function isValidToken(token) {
      return allowedTokens.has(token) || allowedNonSemanticColors.has(token);
    }

    function validateToken(sourceNode, raw) {
      const token = (raw || "").trim();
      if (!token) return;
      if (isValidToken(token)) return;
      reportInvalidToken(sourceNode, token);
    }

    // Prevent revisiting the same object expression
    const visitedObjects = new WeakSet();

    function traverseObjectExpression(objNode) {
      if (!objNode || objNode.type !== "ObjectExpression") return;
      if (visitedObjects.has(objNode)) return;
      visitedObjects.add(objNode);

      const properties = objNode.properties || [];
      for (const prop of properties) {
        if (!prop || prop.type !== "Property") {
          continue;
        }

        const key = prop.key;
        if (!key) continue;
        const keyName = getKeyName(key);

        if (!keyName) {
          if (prop.value?.type === "ObjectExpression") {
            traverseObjectExpression(prop.value);
          }
          continue;
        }

        const normalizedKey = keyName.replaceAll(/-([a-z])/g, (_, c) =>
          c.toUpperCase(),
        );

        if (prop.value?.type === "ObjectExpression") {
          traverseObjectExpression(prop.value);
        }

        const isColorRelated = isColorProp(normalizedKey);
        if (!isColorRelated) {
          const regexMatch = /^(background|border|color|fill|stroke)$/i.test(
            normalizedKey,
          );
          if (!regexMatch) continue;
        }

        const val = prop.value;
        if (!val) continue;

        if (isLiteral(val)) {
          validateToken(val, val.value);
          continue;
        }

        const found = collectStringLiterals(val, []);
        for (const f of found) {
          validateToken(f.node, f.value);
        }
      }
    }

    // Check JSX attributes and specially handle css/sx/style attributes
    function checkJSXAttributes(node) {
      const attributes = node.attributes || [];
      for (const attribute of attributes) {
        if (!attribute || attribute.type !== "JSXAttribute") continue;
        if (!attribute.name || !attribute.name.type) continue;

        const propName = attribute.name.name;
        if (!attribute.value) continue;

        // Direct color prop
        if (isColorProp(propName)) {
          if (isLiteral(attribute.value)) {
            validateToken(attribute.value, attribute.value.value);
            continue;
          }

          if (attribute.value.type === "JSXExpressionContainer") {
            const expr = attribute.value.expression;

            if (isLiteral(expr)) {
              validateToken(expr, expr.value);
              continue;
            }

            const found = collectStringLiterals(expr, []);
            for (const f of found) {
              validateToken(f.node, f.value);
            }
          }
          continue;
        }

        // style-like object props: css, sx, style
        if (propName === "css" || propName === "sx" || propName === "style") {
          if (attribute.value.type === "JSXExpressionContainer") {
            const expr = attribute.value.expression;

            if (expr?.type === "ObjectExpression") {
              traverseObjectExpression(expr);
              continue;
            }

            if (isLiteral(expr)) {
              validateToken(attribute.value, expr.value);
            }
            continue;
          }

          if (isLiteral(attribute.value)) {
            validateToken(attribute.value, attribute.value.value);
          }
          continue;
        }

        // Chakra pseudo-style props (_hover, _active, etc.)
        if (
          typeof propName === "string" &&
          propName.startsWith("_") &&
          attribute.value.type === "JSXExpressionContainer" &&
          attribute.value.expression?.type === "ObjectExpression"
        ) {
          traverseObjectExpression(attribute.value.expression);
        }
      }
    }

    // Look for defineRecipe/defineStyle calls and traverse their object argument
    const recipeFns = new Set([
      "defineRecipe",
      "defineSlotRecipe",
      "defineStyle",
      "defineStyleConfig",
    ]);

    return {
      JSXOpeningElement(node) {
        try {
          checkJSXAttributes(node);
        } catch {
          // fail-safe: don't crash eslint if an unexpected node shape occurs
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
            if (arg?.type === "ObjectExpression") {
              traverseObjectExpression(arg);
            }
          }
        } catch {
          /* ignore */
        }
      },

      ExportDefaultDeclaration(node) {
        try {
          const decl = node.declaration;
          if (decl?.type === "ObjectExpression") {
            traverseObjectExpression(decl);
          }
        } catch {
          // intentionally ignored
        }
      },

      VariableDeclarator(node) {
        try {
          if (node.init?.type === "ObjectExpression") {
            traverseObjectExpression(node.init);
          }
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
    for (const p of node.properties || []) {
      if (p && p.type === "Property")
        collectStringLiterals(p.value, collected, depth + 1);
    }
    return collected;
  }

  return collected;
}

function getKeyName(key) {
  if (key.type === "Identifier") {
    return key.name;
  }
  if (key.type === "Literal") {
    return String(key.value);
  }
  if (key.type === "StringLiteral") {
    return String(key.value);
  }
  if (key.type === "TemplateLiteral") {
    const expressions = key.expressions || [];
    if (expressions.length === 0) {
      return key.quasis.map((q) => (q.value ? q.value.cooked : "")).join("");
    }
  }
  return null;
}

const isLiteral = (v) =>
  v && (v.type === "Literal" || v.type === "StringLiteral");
