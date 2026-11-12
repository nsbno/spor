# @vygruppen/spor-codemods

Codemods are code modifications scripts for automatically migrating Spor code to newer versions. This package uses [jscodeshift](https://github.com/facebook/jscodeshift) to transform your codebase.

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

run `npx spor-codemod --help` for more information.

**Example:**

```bash
# Transform an entire directory
npx spor-codemod color-tokens src/
```

## Available Transforms

There are currently two codemods available.

1. color-tokens
2. data-color

### `color-tokens`

Migrates old color token names to the new naming convention. Can be used after upgrading the `spor-design-tokens` package from major-version 4 to 5.

**What it does:**

Replaces old color tokens with their new equivalents:

- `bg.tertiary` → `bg.brand`
- `bg.secondary` → `bg.subtle`
- `accent.icon` → `icon.accent`
- `alert.error-secondary.surface` → `surface.caution`
- And many more...

See the [full token mapping](./transforms/color-tokens.js) for all transformations.

### `data-color`

Migrates the `spor-design-tokens` package from major version 5 to major version 6, and the `spor-react` package from major version 13 to major version 14.

Replaces old color tokens with their new equivalents:

- `bg.brand` → `bg.highlight`
- `outline.*.hover` → `outline.*.highlight`

Replace colorpalette in Badge and StaticCard, and variant in Alert with the use of data-color:

- `<Alert variant="info" />` → `<Alert data-color="info" />`
- `<Badge colorPalette="red" />` → `<Badge data-color="critical" />`
- `<StaticCard colorPalette="green" />` → `<StaticCard data-color="success" />`
- And more...

## Options

- `--dry` - Dry run (no files are changed)
- `--print` - Print transformed output
- `--silent` - No output
- `--extensions=<extensions>` - File extensions to transform (example: tsx,ts,jsx,js)
- `--ignore-pattern '<pattern>'` - Ignore files with pattern (example: '**/node_modules/**')

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
