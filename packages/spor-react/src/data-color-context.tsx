"use client";
import * as React from "react";

import { SporSemantic } from "./theme/tokens/global-css";

const DataColorContext = React.createContext<SporSemantic | undefined>(
  undefined,
);

interface DataColorProviderProps {
  color?: SporSemantic;
  "data-color"?: SporSemantic;
  children: React.ReactNode;
}

/**
 * Provides a `data-color` value through the React tree, crossing Portal boundaries.
 * Used by portaled components (Dialog, Drawer, etc.) so that a `data-color` set on a
 * root component cascades into portal-rendered content.
 *
 * Non-portaled components do not need this — CSS custom property inheritance handles them.
 */
export const DataColorProvider = ({
  color,
  "data-color": dataColorProperty,
  children,
}: DataColorProviderProps) => {
  const value = color ?? dataColorProperty;
  return (
    <DataColorContext.Provider value={value}>
      {children}
    </DataColorContext.Provider>
  );
};

/**
 * Returns the nearest `data-color` value from a `DataColorProvider` ancestor.
 * Portaled components use this to apply the correct color theme inside the portal.
 */
export const useDataColor = () => React.useContext(DataColorContext);
