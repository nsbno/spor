import StyleDictionaryFactory from "style-dictionary";
import { elmFormatter } from "./formatters/elm/module";
import { typescriptTypingsFormatter } from "./formatters/typescript/typings";
import { pxTransformer } from "./transforms/size/px";
import { pxToRemTransformer } from "./transforms/size/pxToRem";

const styleDictionary = StyleDictionaryFactory.extend("config.json");

// Register formatters
// Read about formatters @ https://amzn.github.io/style-dictionary/#/formats
styleDictionary.registerFormat(typescriptTypingsFormatter);
styleDictionary.registerFormat(elmFormatter);

// Register transforms
// Read about transforms @ https://amzn.github.io/style-dictionary/#/transforms
styleDictionary.registerTransform(pxTransformer);
styleDictionary.registerTransform(pxToRemTransformer);

styleDictionary.buildAllPlatforms();
