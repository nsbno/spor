import styleDictionary from "style-dictionary";
import { cjsModuleFormatter } from "./formatters/typescript/cjs-module";
import { esModuleFormatter } from "./formatters/typescript/es-module";
import { reactNativeTypescriptTypingsFormatter } from "./formatters/typescript/rn-typings";
import { typescriptTypingsFormatter } from "./formatters/typescript/typings";
import { pxTransformer } from "./transforms/size/px";
import { pxToRemTransformer } from "./transforms/size/pxToRem";

const sd = new styleDictionary("config.json");

import { minifyDictionary } from "style-dictionary/utils";

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
    console.log("ok");

    return JSON.stringify(minifyDictionary(dictionary.tokens), null, 2);
  },
});

sd.buildAllPlatforms();
