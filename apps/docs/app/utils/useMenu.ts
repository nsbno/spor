import { LoaderData as RootLoaderData } from "~/root";
import { useMatchesData } from "./useMatchesData";

export const useMenu = (slug: "top-menu" | "side-menu") => {
  const { initialSanityData } = useMatchesData<RootLoaderData>("root");
  return initialSanityData.menus.find((menu) => menu.slug === slug);
};
