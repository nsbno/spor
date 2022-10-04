import * as React from "react";
import { BlockEditor } from "sanity/form";

export const SporBlockEditor = React.forwardRef((props: any, ref: any) => {
  return <BlockEditor {...props} ref={ref} />;
});
