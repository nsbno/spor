import * as sporIcons from "@vygruppen/spor-icon-react";
import * as sporReact from "@vygruppen/spor-react";
import { LiveProvider as ReactLiveProvider } from "react-live";

// For some reason, a default export is generated for the `spor-react` package. // That can't be included to the `scope` below, because reasons.
// Therefore, we need to remove it from the set of all components
const { default: _, ...allComponents } = sporReact as any;
const { default: __, ...allIcons } = sporIcons as any;

const exposedComponents = { ...allComponents, ...allIcons };

type LiveProviderProps = {
  code: string;
  children: React.ReactNode;
};
export const LiveProvider = ({ children, code }: LiveProviderProps) => (
  <ReactLiveProvider code={code?.trim()} scope={exposedComponents}>
    {children}
  </ReactLiveProvider>
);
