import StyleDictionaryFactory from "style-dictionary";
import config from "../config";
import { elmFormatter } from "./formatters/elm/module";
import { cjsModuleFormatter } from "./formatters/typescript/cjs-module";
import { esModuleFormatter } from "./formatters/typescript/es-module";
import { reactNativeTypescriptTypingsFormatter } from "./formatters/typescript/rn-typings";
import { typescriptTypingsFormatter } from "./formatters/typescript/typings";
import { elmNameTransformer } from "./transforms/elm/name";
import { pxTransformer } from "./transforms/size/px";
import { pxToRemTransformer } from "./transforms/size/pxToRem";

const styleDictionary = StyleDictionaryFactory.extend(config);

// Register formatters
// Read about formatters @ https://amzn.github.io/style-dictionary/#/formats
styleDictionary.registerFormat(cjsModuleFormatter);
styleDictionary.registerFormat(esModuleFormatter);
styleDictionary.registerFormat(typescriptTypingsFormatter);
styleDictionary.registerFormat(reactNativeTypescriptTypingsFormatter);
styleDictionary.registerFormat(elmFormatter);

// Register transforms
// Read about transforms @ https://amzn.github.io/style-dictionary/#/transforms
styleDictionary.registerTransform(pxTransformer);
styleDictionary.registerTransform(pxToRemTransformer);
styleDictionary.registerTransform(elmNameTransformer);

styleDictionary.buildAllPlatforms();
