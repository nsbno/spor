import { createContext, useContext } from "react";

export const HeaderOffsetContext = createContext(0);

export const useHeaderOffset = () => useContext(HeaderOffsetContext);
