import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import tokens from "@vygruppen/spor-design-tokens/tokens.json" with { type: "json" };

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

// Use imported tokens directly
const allowedTokens = getTokens(tokens);

// Write allowedTokens to dist/tokens.js as an ES module
const distDir = path.join(process.cwd(), "dist");
mkdirSync(distDir, { recursive: true });
const jsExport = `export const allowedTokens = ${JSON.stringify([...allowedTokens], null, 2)};\n`;
writeFileSync(path.join(distDir, "tokens.js"), jsExport);
// Use tsup to bundle this file if needed
