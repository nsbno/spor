# Link (React)

Easy to use links in a few different designs

## Installation

```bash
$ npm install @vygruppen/spor-link-react
```

## Usage

```tsx
import { Link } from "@vygruppen/spor-link-react";
```

Basic usage is just like a good ol' `<a />` tag:

```tsx
<Link href="https://vy.no">Go to Vy</Link>
```

You can specify a variant too - `primary`, `secondary` or `tertiary`:

```tsx
<Link href="https://vy.no" variant="secondary">
  Go to Vy
</Link>
```

If you specify an external URL, or if you pass the `isExternal` flag, you will get a "link out" icon.

```tsx
<Link href="https://vy.no">Go to Vy</Link>
```

If you're passing an external link, but you want it to look like you didn't, you can override this behavior by specifying `isExternal={false}`. But don't do that.

## Development

Please refer to the root readme for development notes.
