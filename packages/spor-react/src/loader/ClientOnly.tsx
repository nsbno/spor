import React from "react";
import { useHydrated } from "./useHydrated";

type ClientOnlyProps = {
  /** A function that renders the client-side only component */
  children: () => React.ReactNode;
  /** An optional fallback to render in place on the server */
  fallback?: React.ReactNode;
};

/**
 * Render the children only after the JS has loaded client-side. Use an optional
 * fallback component if the JS is not yet loaded.
 *
 * Example: Render a Chart component if JS loads, renders a simple FakeChart
 * component server-side or if there is no JS. The FakeChart can have only the
 * UI without the behavior or be a loading spinner or skeleton.
 * ```tsx
 * return (
 *   <ClientOnly fallback={<FakeChart />}>
 *     {() => <Chart />}
 *   </ClientOnly>
 * );
 * ```
 */
export const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const isHydrated = useHydrated();
  return <>{isHydrated ? children() : fallback}</>;
};
