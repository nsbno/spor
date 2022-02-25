import { Language, SporProvider } from "@vygruppen/spor-react";
import { BlockEditor } from "part:@sanity/form-builder";
import * as React from "react";

export const SporBlockEditor = React.forwardRef((props: any, ref: any) => {
  return (
    <SporProvider language={Language.English}>
      <BlockEditor {...props} ref={ref} />
    </SporProvider>
  );
});
