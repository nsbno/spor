import { useMemo } from "react";
import { useMatches } from "remix";

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 */
export function useMatchesData<
  ReturnType = Record<string, unknown> | undefined
>(id: string): ReturnType {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data as ReturnType;
}
