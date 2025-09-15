import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import linjetag from "../spor-design-tokens/tokens/color/linjetag.json" with { type: "json" };
import vyDigital from "../spor-design-tokens/tokens/color/vy-digital.json" with { type: "json" };

// Function to recursively extract token paths from the JSON
function extractTokenPaths(obj, prefix = "") {
  const tokens = [];
  for (const [key, value] of Object.entries(obj)) {
    // Handle 'DEFAULT' key by not appending it to the path
    const currentKey = key === "DEFAULT" ? "" : key;
    const currentPath =
      prefix && currentKey ? `${prefix}.${currentKey}` : prefix || currentKey;
    if (typeof value === "object" && value !== null && !("value" in value)) {
      tokens.push(...extractTokenPaths(value, currentPath));
      continue;
    }
    // If 'value' is present, extract its keys if it's an object
    if (typeof value === "object" && value !== null && "value" in value) {
      const val = value.value;
      if (typeof val === "object" && val !== null) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const themeKey of Object.keys(val)) {
          tokens.push(currentPath);
        }
      } else {
        tokens.push(currentPath);
      }
      continue;
    }
    // For linjetag, value is a string
    if (typeof value === "string") {
      tokens.push(currentPath);
    }
  }
  return tokens;
}

function getTokensFromVyDigital(json) {
  return extractTokenPaths(json.color.vyDigital, "");
}

function getTokensFromLinjetag(json) {
  return extractTokenPaths(json.color.linjetag, "linjetag");
}

const allTokens = new Set();
for (const token of getTokensFromVyDigital(vyDigital)) allTokens.add(token);
for (const token of getTokensFromLinjetag(linjetag)) allTokens.add(token);

console.log(`Extracted ${allTokens.size} unique tokens.`);

const distDir = path.join(process.cwd(), "dist");
mkdirSync(distDir, { recursive: true });
const jsExport = `export const allowedTokens = ${JSON.stringify([...allTokens], null, 2)};\n`;
writeFileSync(path.join(distDir, "tokens.js"), jsExport);
