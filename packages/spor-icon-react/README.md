# Icons (React)

This package includes all of our icons as React components.

## Installation

```bash
$ npm install @vygruppen/spor-icon-react
```

## Usage

```tsx
import { AddFill18Icon } from "@vygruppen/spor-icon-react";
```

There are lots of icons - close to 1000 at last count. Most icons are designed for one of three to four sizes (12, 18, 24, 30 px), and available in a filled or outlined variant.

The naming scheme looks something like this:

```
{name}{variant}{size}Icon
```

Then, use the icon(s) as follows:

```
<AddFill18Icon />
```

### 🚨 Never import all icons!

When you're using these icons, never do `import * as icons from "@vygruppen/spor-icon-react"`! That will add over a megabyte to your JavaScript bundle, and render your app close to unusable on lower-end devices. 😱

Instead, import only the icons you need as named imports.

### Icon metadata

If you need to, you can fetch the metadata of the icon library from the `metadata` JSON file:

```tsx
import metadata from "@vygruppen/spor-icon-react/dist/metadata.json";
```

This will probably only be interesting for the documentation site or other internal tools, but feel free to use it.

### Available icons

Please refer to the [documentation](https://spor.vy.no/resources/icons) for a complete list of icons:

## Development

Please refer to the root readme for development notes.
