import styleDictionary from "style-dictionary";

import { cjsModuleFormatter } from "./formatters/typescript/cjs-module.ts";
import { esModuleFormatter } from "./formatters/typescript/es-module.ts";
import { reactNativeTypescriptTypingsFormatter } from "./formatters/typescript/rn-typings.ts";
import { typescriptTypingsFormatter } from "./formatters/typescript/typings.ts";
import { pxTransformer } from "./transforms/size/px.ts";
import { pxToRemTransformer } from "./transforms/size/pxToRem.ts";

const sd = new styleDictionary("config.json");

import { minifyDictionary } from "style-dictionary/utils";

import { generateTokenModuleFromJson } from "./generateTokenModuleFromJson.ts";

// Register formatters
// Read about formatters @ https://amzn.github.io/style-dictionary/#/formats
sd.registerFormat(cjsModuleFormatter);
sd.registerFormat(esModuleFormatter);
sd.registerFormat(typescriptTypingsFormatter);
sd.registerFormat(reactNativeTypescriptTypingsFormatter);

// Register transforms
// Read about transforms @ https://amzn.github.io/style-dictionary/#/transforms
sd.registerTransform(pxTransformer);
sd.registerTransform(pxToRemTransformer);

sd.registerFormat({
  name: "jsondocs",
  format: function ({ dictionary }) {
    return JSON.stringify(minifyDictionary(dictionary.tokens), null, 2);
  },
});

sd.buildAllPlatforms();

/**
 * Generates TypeScript token modules from JSON files in the tokens directory.
 * This allows direct access to raw token values for use in themes and other features.
 */
await generateTokenModuleFromJson();
