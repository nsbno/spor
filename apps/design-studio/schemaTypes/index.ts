import * as documents from "./documents";
import * as linkObjects from "./link-objects";
import * as objects from "./objects";

export const schemaTypes = [
  ...Object.values(objects),
  ...Object.values(documents),
  ...Object.values(linkObjects),
];
