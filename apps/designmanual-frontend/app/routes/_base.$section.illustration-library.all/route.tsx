import { PassThrough } from "node:stream";

import Archiver from "archiver";
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
  const mainzip = Archiver("zip");
  const lightIllustrations = Archiver("zip");
  const darkIllustrations = Archiver("zip");

  const mainzipStream = new PassThrough();
  const lightIllustrationsStream = new PassThrough();
  const darkIllustrationsStream = new PassThrough();

  mainzip.pipe(mainzipStream);
  lightIllustrations.pipe(lightIllustrationsStream);
  darkIllustrations.pipe(darkIllustrationsStream);

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
            colorMode: "both",
          },
        ];
      }
      // Different images, download both
      return [
        {
          title: slugify(`${illustration.title} light`),
          url: urlBuilder.image(illustration.imageLightBackground).url(),
          colorMode: "light",
        },
        {
          title: slugify(`${illustration.title} dark`),
          url: urlBuilder.image(illustration.imageDarkBackground).url(),
          colorMode: "dark",
        },
      ];
    })
    .map(async (illustration) => {
      const response = await fetch(illustration.url);
      if (illustration.colorMode === "light") {
        lightIllustrations.append(await response.text(), {
          name: `${illustration.title}.svg`,
        });
      } else if (illustration.colorMode === "dark") {
        darkIllustrations.append(await response.text(), {
          name: `${illustration.title}.svg`,
        });
      } else {
        const svgContent = await response.text();
        lightIllustrations.append(svgContent, {
          name: `${illustration.title}.svg`,
        });
        darkIllustrations.append(svgContent, {
          name: `${illustration.title}.svg`,
        });
      }
    });
  await Promise.all(promises);

  lightIllustrations.finalize();
  darkIllustrations.finalize();

  mainzip.append(lightIllustrationsStream, { name: "light-illustrations.zip" });
  mainzip.append(darkIllustrationsStream, { name: "dark-illustrations.zip" });
  mainzip.finalize();

  const headers = new Headers();
  headers.set("Content-Type", "application/zip");
  headers.set("Content-Disposition", "attachment; filename=illustrations.zip");
  headers.set("Cache-Control", "max-age=60");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Response(mainzipStream as any, {
    status: 200,
    headers,
  });
};
