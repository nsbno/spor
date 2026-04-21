# @vygruppen/spor-codemods

Codemods for automatically migrating Spor code to newer versions. This package uses [jscodeshift](https://github.com/facebook/jscodeshift) to transform your codebase.

## Installation

```bash
pnpm add -D @vygruppen/spor-codemods
```

## Usage

### CLI

The easiest way to use codemods is through the CLI:

```bash
npx spor-codemod <transform> <path> [options]
```

### Programmatic API

You can also use codemods programmatically in Node.js:

```typescript
import { runTransform } from "@vygruppen/spor-codemods";

// Run a transform
await runTransform("color-tokens", {
  paths: ["src/"],
  dry: true, // Preview changes without writing
});

// Run with custom options
await runTransform("color-tokens", {
  paths: ["src/components/", "src/pages/"],
  verbose: true,
  extensions: ["tsx", "ts"],
});
```

**Available functions:**

- `runTransform(transform, options)` - Run a codemod transform
- `getAvailableTransforms()` - Get list of available transform names
- `getTransformPath(transform)` - Get the file path for a transform

**TypeScript types:**

```typescript
import type {
  TransformName,
  TransformOptions,
  Transform,
  API,
  FileInfo,
} from "@vygruppen/spor-codemods";
```

### Available Transforms

#### `color-tokens`

Migrates old color token names to the new naming convention.

**Example:**

```bash
# Transform a single file
npx spor-codemod color-tokens src/App.tsx

# Transform an entire directory
npx spor-codemod color-tokens src/

# Dry run to preview changes
npx spor-codemod color-tokens src/ --dry

# Print transformed output
npx spor-codemod color-tokens src/Component.tsx --print
```

**What it does:**

Replaces old color tokens with their new equivalents:

- `bg.tertiary` → `bg.brand`
- `bg.secondary` → `bg.subtle`
- `accent.icon` → `icon.accent`
- `alert.error-secondary.surface` → `surface.caution`
- And many more...

See the [full token mapping](./transforms/color-tokens.js) for all transformations.

### Advanced Usage

You can pass any [jscodeshift options](https://github.com/facebook/jscodeshift#usage-cli):

```bash
# Only show files that would be modified
npx spor-codemod color-tokens src/ --dry --print

# Run in silent mode
npx spor-codemod color-tokens src/ --silent

# Process files in parallel (faster for large codebases)
npx spor-codemod color-tokens src/ --run-in-band
```

## Options

- `--dry` - Dry run (no files are changed)
- `--print` - Print transformed output
- `--silent` - No output
- `--extensions=<extensions>` - File extensions to transform (example: tsx,ts,jsx,js)
- `--ignore-pattern '<pattern>'` - Ignore files with pattern (example: '**/node_modules/**')

## Tips

1. **Always run in dry mode first** to preview changes:

   ```bash
   npx spor-codemod color-tokens src/ --dry
   ```

2. **Commit your changes** before running a codemod so you can review the diff and revert if needed.

3. **Use with Git** to see what changed:
   ```bash
   npx spor-codemod color-tokens src/
   git diff
   ```

## Contributing

To add a new transform:

1. Create a new file in `transforms/` (e.g., `transforms/<category>/my-transform.js`)
2. Export a default function that follows the jscodeshift API
3. Add it to the transform map in `bin/cli.js`
4. Update this README with documentation
