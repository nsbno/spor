#!/usr/bin/env node

import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arguments_ = process.argv.slice(2);

// Show help if no arguments or --help flag
if (
  arguments_.length === 0 ||
  arguments_.includes("--help") ||
  arguments_.includes("-h")
) {
  console.log(`
Spor Codemods

Usage:
  spor-codemod <transform> <path> [options]

Available transforms:
  color-tokens    Migrate old color tokens to new naming convention

Examples:
  # Run color-tokens transform on a single file
  spor-codemod color-tokens src/App.tsx

  # Run on entire directory
  spor-codemod color-tokens src/

  # Dry run (shows changes without applying them)
  spor-codemod color-tokens src/ --dry

Options:
  --dry           Dry run (no changes are written to files)
  --print         Print transformed output
  -h, --help      Show this help message

All jscodeshift options are supported. See:
https://github.com/facebook/jscodeshift#usage-cli
`);
  process.exit(0);
}

const [transform, ...restArguments] = arguments_;

// Map friendly transform names to actual file paths
const transformMap = {
  "color-tokens": path.join(__dirname, "../transforms/color-tokens.js"),
};

const transformPath = transformMap[transform];

if (!transformPath) {
  console.error(`Error: Unknown transform "${transform}"`);
  console.error(
    `Available transforms: ${Object.keys(transformMap).join(", ")}`,
  );
  process.exit(1);
}

// Build jscodeshift command
const jscodeshiftArguments = [
  "-t",
  transformPath,
  "--parser=tsx",
  "--extensions=tsx,ts,jsx,js",
  "--ignore-pattern '**/node_modules/**' '**/dist/**'",
  ...restArguments,
];

try {
  execSync(`npx jscodeshift ${jscodeshiftArguments.join(" ")}`, {
    stdio: "inherit",
  });
} catch (error) {
  process.exit(error.status || 1);
}
