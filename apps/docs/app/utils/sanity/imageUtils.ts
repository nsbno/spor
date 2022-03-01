import urlBuilderBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";

/** Builds URLs hosted on Sanity */
export const urlBuilder = urlBuilderBuilder(sanityConfig);
