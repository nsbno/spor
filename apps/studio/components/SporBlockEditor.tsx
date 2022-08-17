import { BlockEditor } from "part:@sanity/form-builder";
import * as React from "react";

export const SporBlockEditor = React.forwardRef((props: any, ref: any) => {
  return <BlockEditor {...props} ref={ref} />;
});
