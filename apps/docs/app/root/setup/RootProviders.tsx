import { Language, SporProvider } from "@vygruppen/spor-react";
import { PortableTextProvider } from "../../features/portable-text/PortableText";

type RootProvidersProps = { children: React.ReactNode };
/**
 * Applies all root providers.
 *
 * If you need to add a root provider, add it into this component, don't add it to `root.tsx`.
 */
export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <SporProvider language={Language.English}>
      <PortableTextProvider>{children}</PortableTextProvider>
    </SporProvider>
  );
};
