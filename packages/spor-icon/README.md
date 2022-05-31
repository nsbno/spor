# Icons (SVG)

This package contains all of our SVG icons.

If you want to consume ready made icons, you should probably look at the `@vygruppen/spor-icon-react` package for a more complete package.

## Structure

This package only contains the actual SVGs, which are categorized and semi-optimized. You might want to run them through an optimization tool like SVGO before outputting any code.

## Adding icons?

If you want to add an icon, add the .svg file in the correct category, and follow the naming strategy (`{name with spaces}-{variant}-{size}`). Remember to mark the new version as a minor version bump.
