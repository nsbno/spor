import { useSiteEnvironment } from "~/features/utilities/environment/utils";

/** Creates a file url */
export const useFileUrlBuilder = () => {
  const siteEnvironment = useSiteEnvironment();
  const baseUrl =
    siteEnvironment === "production"
      ? "https://www.vy.no"
      : "https://stage.digitalekanaler-web.vydev.io";
  return (url: string) => url.replace("https://cdn.sanity.io", baseUrl);
};
