import { tokens } from "./tokens";

export default {
  source: ["tokens/**/*.json"],
  platforms: {
    rn: {
      transforms: [
        "name/cti/camel",
        "attribute/cti",
        "size/object",
        "color/css",
      ],
      files: [
        {
          format: "typescript/cjs-module",
          destination: "react-native/index.js",
        },
        {
          format: "typescript/es-module",
          destination: "react-native/index.mjs",
        },
        {
          format: "typescript/rn-typings",
          destination: "react-native/index.d.ts",
        },
      ],
    },
    javascript: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/px", "color/css"],
      files: [
        {
          format: "typescript/cjs-module",
          destination: "dist/tokens.js",
        },
        {
          format: "typescript/es-module",
          destination: "dist/tokens.mjs",
        },
        {
          format: "typescript/typings",
          destination: "dist/tokens.d.ts",
        },
      ],
    },
    elm: {
      buildPath: "elm/src/Spor/Token/",
      transforms: ["attribute/cti", "name/elm", "size/px", "color/css"],
      files: tokens
        .filter((f) => !["font", "family", "style"].includes(f.type))
        .map((tokenFile) => {
          const category = pascalCase(tokenFile.category);
          const type = pascalCase(tokenFile.type);

          return {
            format: "elm/module",
            destination: `${category}/${type}.elm`,
            filter: {
              attributes: {
                category: tokenFile.category,
                type: tokenFile.type,
              },
            },
            options: {
              category: category,
              type: type,
            },
          };
        }),
    },
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/pxToRem",
        "color/css",
      ],
      files: [
        {
          format: "css/variables",
          destination: "dist/tokens.css",
        },
      ],
    },
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/pxToRem",
        "color/css",
      ],
      files: [
        {
          format: "scss/variables",
          destination: "dist/_tokens.scss",
        },
      ],
    },
    less: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/pxToRem",
        "color/css",
      ],
      files: [
        {
          format: "less/variables",
          destination: "dist/tokens.less",
        },
      ],
    },
  },
};

function pascalCase(input: string): string {
  return input
    .split("-")
    .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`)
    .join("");
}
