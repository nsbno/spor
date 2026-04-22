import path from "node:path";
import { fileURLToPath } from "node:url";

import { run as runJscodeshift } from "jscodeshift/src/Runner";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Internal jscodeshift Runner options
 */
interface JscodeshiftOptions {
  dry?: boolean;
  print?: boolean;
  verbose?: number;
  runInBand?: boolean;
  silent?: boolean;
  parser?: string;
  extensions?: string;
  ignorePattern?: string[];
  gitignore?: boolean;
}

/**
 * Available transform names
 */
export type TransformName = "color-tokens";

/**
 * Options for running a codemod transform
 */
export interface TransformOptions {
  /**
   * Paths to files or directories to transform
   */
  paths: string[];
  /**
   * Dry run - don't write changes to files
   * @default false
   */
  dry?: boolean;
  /**
   * Print the transformed output
   * @default false
   */
  print?: boolean;
  /**
   * Be verbose
   * @default false
   */
  verbose?: boolean;
  /**
   * Run transformations in a single thread
   * @default false
   */
  runInBand?: boolean;
  /**
   * Silence output
   * @default false
   */
  silent?: boolean;
  /**
   * File extensions to transform
   * @default ['tsx', 'ts', 'jsx', 'js']
   */
  extensions?: string[];
  /**
   * Ignore pattern (can be a minimatch pattern)
   */
  ignorePattern?: string[];
  /**
   * Git files only
   * @default false
   */
  gitignore?: boolean;
}

/**
 * Map of transform names to their file paths
 */
const transformMap: Record<TransformName, string> = {
  "color-tokens": path.join(__dirname, "../transforms/color-tokens.js"),
};

/**
 * Run a codemod transform programmatically
 *
 * @param transform - The name of the transform to run
 * @param options - Transform options
 * @returns Promise that resolves when the transform is complete
 *
 * @example
 * ```typescript
 * import { runTransform } from '@vygruppen/spor-codemods';
 *
 * await runTransform('color-tokens', {
 *   paths: ['src/'],
 *   dry: true,
 * });
 * ```
 */
export async function runTransform(
  transform: TransformName,
  options: TransformOptions,
): Promise<void> {
  const transformPath = transformMap[transform];

  if (!transformPath) {
    throw new Error(
      `Unknown transform "${transform}". Available transforms: ${Object.keys(transformMap).join(", ")}`,
    );
  }

  const jscodeshiftOptions: JscodeshiftOptions = {
    dry: options.dry ?? false,
    print: options.print ?? false,
    verbose: options.verbose ? 2 : 0,
    runInBand: options.runInBand ?? false,
    silent: options.silent ?? false,
    parser: "tsx",
    extensions: options.extensions?.join(",") ?? "tsx,ts,jsx,js",
    ignorePattern: options.ignorePattern ?? [],
    gitignore: options.gitignore ?? false,
  };

  try {
    await runJscodeshift(transformPath, options.paths, jscodeshiftOptions);
  } catch (error) {
    throw new Error(
      `Transform failed: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Get a list of available transforms
 *
 * @returns Array of available transform names
 */
export function getAvailableTransforms(): TransformName[] {
  return Object.keys(transformMap) as TransformName[];
}

/**
 * Get the file path for a specific transform
 *
 * @param transform - The name of the transform
 * @returns The absolute path to the transform file
 */
export function getTransformPath(transform: TransformName): string {
  const transformPath = transformMap[transform];

  if (!transformPath) {
    throw new Error(
      `Unknown transform "${transform}". Available transforms: ${Object.keys(transformMap).join(", ")}`,
    );
  }

  return transformPath;
}

// Re-export types from jscodeshift for convenience
export type { API, FileInfo, Transform } from "jscodeshift";
