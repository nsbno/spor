import * as dateUtils from "@internationalized/date";
import * as allIcons from "@vygruppen/spor-icon-react";
import * as allComponents from "@vygruppen/spor-react";
import { LiveProvider as ReactLiveProvider } from "react-live";

const exposedComponents = { ...allComponents, ...allIcons, ...dateUtils };

type LiveProviderProps = {
  code: string;
  children: React.ReactNode;
};
export const LiveProvider = ({ children, code }: LiveProviderProps) => (
  <ReactLiveProvider code={code?.trim()} scope={exposedComponents}>
    {children}
  </ReactLiveProvider>
);
