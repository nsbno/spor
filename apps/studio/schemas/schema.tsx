import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import * as documents from "./documents";
import * as objects from "./objects";

// This file sets up the schema for Sanity.
// You should most likely never have to edit this file.
// To add a new schema type, add it to either `documents` or `objects`,
// and its corresponding index file.
export default createSchema({
  name: "default",
  types: [
    ...schemaTypes,
    ...Object.values(documents),
    ...Object.values(objects),
  ],
});
