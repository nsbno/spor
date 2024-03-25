import { Brand } from "@vygruppen/spor-react";
import { useMatchesData } from "./useMatchesData";

export const useBrand = () => {
  const rootData = useMatchesData("root");
  return rootData?.brand ?? Brand.VyDigital;
};
