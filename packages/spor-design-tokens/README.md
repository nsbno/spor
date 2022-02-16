# Spor Design tokens

This is where you'll find the Spor design system's design tokens.

> ## Not documented yet
>
> It's terrible, we know. We're working on creating a documentation site as we
> speak, so hopefully you'll be able to read up on our tokens soon.
>
> Until then, you can check out the Figma files for more details (not publicly available).

## What are design tokens?

Design tokens are any discrete value found in a design. Put in physical terms, they are the quarks of atomic design. Examples are colors, fonts, font sizes, spacing, breakpoints and so forth.

Uniting all of these values in a single structure, and applying those values across all tools applications, ensures a high level of consistency.

You can read more about design tokens and what problem they solve [here](https://www.invisionapp.com/inside-design/design-tokens/).

## What tokens are there?

We have a variety of tokens, and we suggest you explore the different types of tokens in the source folder. That being said, the main groups are:

### Colors

There are a lot of colors in our palette, and the colors are structured into a few useful groups. You can find the complete palette in colors/palette, and the more rememberable aliases for those colors on colors/alias.

There are several more, like colors/main for our main color palette (most colors should come from here), and colors/text for colors used in typography.

### Depth

The depth category includes drop shadows and z-indexes (elevation), grouped by regular use cases.

### Fonts

The font category includes all font families and styles - including matching line heights, font weights and so forth.

### Sizes

You'll find our spacing scale in sizes, along with border radii, breakpoints, font sizes, line heights and strokes.

Spacing values are available as t-shirt sizes (md, 2xl etc), and pixel values (16px, 32px etc.) under size/spacing and size/spacing-px, respectively. Use the one you're most accustomed to (but try to standardize on one in a single app!)

### Timings

The timings category contains all transition timings and easing functions.

## Usage

Design tokens can be consumed through a variety of technologies.

### JavaScript / TypeScript

Install the package with `npm install @vygruppen/spor-design-tokens`.

```tsx
import tokens from "@vygruppen/spor-design-tokens";

const background = tokens.colors.brand.darkGray.value;
```

### CSS

Install the package with `npm install @vygruppen/spor-design-tokens`.

All values are available as CSS custom properties. If you're using Webpack, you can use the tokens like this:

```css
@import "~@vygruppen/spor-design-tokens/lib/tokens.css";

.hero {
  font-family: var(--font-styles-xxl-font-family);
  line-height: var(--font-styles-xxl-line-height);
  font-size: var(--font-styles-xxl-font-size-mobile);
}
```

### SCSS

Install this package with `npm install @vygruppen/spor-design-tokens`.

All values are available as SCSS variables.

```scss
@import "~@vygruppen/spor-design-tokens/lib/tokens";

.hero {
  font-family: $font-styles-xxl-font-family;
  line-height: $font-styles-xxl-line-height;
  font-size: $font-styles-xxl-font-size-mobile;

  @media screen and (min-width: $size-breakpoint-lg) {
    font-size: $font-styles-xxl-font-size-desktop;
  }
}
```

### LESS

Install this package with `npm install @vygruppen/spor-design-tokens`.

All values are available as LESS variables.

```less
@import "~@vygruppen/spor-design-tokens/lib/tokens";

.hero {
  font-family: @font-styles-xxl-font-family;
  line-height: @font-styles-xxl-line-height;
  font-size: @font-styles-xxl-font-size-mobile;

  @media screen and (min-width: @size-breakpoint-lg) {
    font-size: @font-styles-xxl-font-size-desktop;
  }
}
```

### Elm

Not yet supported.

## I want to contribute!

First off - thank you :tada: Contributing to our design tokens is what keeps them alive.

To get started, clone the repository, change into your new directory, and run `npm install` to download all the files required.

To generate the tokens, run `npm run build`. They will show up in the `build/` directory. Verify that all tokens look good before creating a pull request.

We use [Style Dictionary](https://amzn.github.io/style-dictionary) to generate consumable design tokens. You can find all our tokens in the `tokens/` folder, in
discrete `.json` files.

### Committing code

This repo uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to structure our commits into [semantically versioned](https://semver.org/) releases.

To enforce this, we use a tool called [commitizen](https://github.com/commitizen/cz-cli). This helps you write neat looking, conformant commit messages in no time at all. To commit with `commitizen`, install it globally with `npm i -g commitizen`, or run it via npm with `npx cz` (or `npm run cz`).
