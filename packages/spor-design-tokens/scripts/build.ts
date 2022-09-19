import StyleDictionaryFactory from "style-dictionary";
import config from "../config";
import { elmFormatter } from "./formatters/elm/module";
import { typescriptModuleFormatter } from "./formatters/typescript/module";
import { reactNativeTypescriptTypingsFormatter } from "./formatters/typescript/rn-typings";
import { typescriptTypingsFormatter } from "./formatters/typescript/typings";
import { elmNameTransformer } from "./transforms/elm/name";
import { pxTransformer } from "./transforms/size/px";
import { pxToRemTransformer } from "./transforms/size/pxToRem";

const styleDictionary = StyleDictionaryFactory.extend(config);

// Register formatters
// Read about formatters @ https://amzn.github.io/style-dictionary/#/formats
styleDictionary.registerFormat(typescriptModuleFormatter);
styleDictionary.registerFormat(typescriptTypingsFormatter);
styleDictionary.registerFormat(reactNativeTypescriptTypingsFormatter);
styleDictionary.registerFormat(elmFormatter);

// Register transforms
// Read about transforms @ https://amzn.github.io/style-dictionary/#/transforms
styleDictionary.registerTransform(pxTransformer);
styleDictionary.registerTransform(pxToRemTransformer);
styleDictionary.registerTransform(elmNameTransformer);

styleDictionary.buildAllPlatforms();
