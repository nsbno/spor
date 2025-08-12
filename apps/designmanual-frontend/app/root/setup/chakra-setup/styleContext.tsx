import { createContext } from "react";

export type ClientStyleContextData = {
  reset: () => void;
};

export const ClientStyleContext = createContext<ClientStyleContextData>({
  reset: () => {},
});

export type ServerStyleContextData = {
  key: string;
  ids: string[];
  css: string;
};

export const ServerStyleContext = createContext<
  ServerStyleContextData[] | null
>(null);
