import { strToU8, type Zippable, zipSync } from "fflate";
import { LoaderFunctionArgs } from "react-router";

import { urlBuilder } from "~/utils/sanity/utils";
import { slugify } from "~/utils/stringUtils";

import { getIllustrationsQuery } from "../_base.$section.illustration-library/queries";

/**
 * Fetches all illustrations from Sanity and returns them as a zip file.
 */
export const loader = async (arguments_: LoaderFunctionArgs) => {
  console.info("Fetching list of illustrations from Sanity");

  const { items: allIllustrations } = await getIllustrationsQuery(
    arguments_.request.url,
  );

  console.info(
    `Found ${allIllustrations.length} illustrations. Downloading them in parallel…`,
  );
  const files: Zippable = {};

  const promises = allIllustrations
    .flatMap((illustration) => {
      const lightRef =
        illustration.imageLightBackground?._ref ||
        illustration.imageLightBackground?.asset?._ref;
      const darkRef =
        illustration.imageDarkBackground?._ref ||
        illustration.imageDarkBackground?.asset?._ref;

      if (lightRef && darkRef && lightRef === darkRef) {
        // Same image for light and dark, download only once
        return [
          {
            title: slugify(illustration.title),
            url: urlBuilder.image(illustration.imageLightBackground).url(),
          },
        ];
      }
      // Different images, download both
      return [
        {
          title: slugify(`${illustration.title} light`),
          url: urlBuilder.image(illustration.imageLightBackground).url(),
        },
        {
          title: slugify(`${illustration.title} dark`),
          url: urlBuilder.image(illustration.imageDarkBackground).url(),
        },
      ];
    })
    .map(async (illustration) => {
      const response = await fetch(illustration.url);
      files[`${illustration.title}.svg`] = strToU8(await response.text());
    });
  await Promise.all(promises);

  const headers = new Headers();
  headers.set("Content-Type", "application/zip");
  headers.set("Content-Disposition", "attachment; filename=illustrations.zip");
  headers.set("Cache-Control", "max-age=60");

  return new Response(zipSync(files), {
    status: 200,
    headers,
  });
};
