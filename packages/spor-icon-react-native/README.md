# Icons (React Native)

This package includes all of our icons as React Native components.

## Installation

```bash
$ npm install @vygruppen/spor-icon-react-native
```

## Usage

```tsx
import { AddFilled16Icon } from "@vygruppen/spor-icon-react-native";
```

There are lots of icons - close to 1000 at last count. Most icons are designed for one of three to four sizes (12, 18, 24, 30 px), and available in a filled or outlined variant.

The naming scheme looks something like this:

```
{name}{variant}{size}Icon
```

### 🚨 Never import all icons!

When you're using these icons, never do `import * as icons from "@vygruppen/spor-icon-react-native"`! That will add over a megabyte to your JavaScript bundle, and render your app close to unusable on lower-end devices. 😱

Instead, import only the icons you need as named imports.

### Available icons

Please refer to the [documentation](https://spor.cloud.vy.no/ressurser/ikoner) for a complete list of icons:

## Development

Please refer to the root readme for development notes.
