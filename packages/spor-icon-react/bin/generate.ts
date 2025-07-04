import { transform } from "@svgr/core";
import Case from "case";
import fs from "fs-extra";

import { componentTemplate } from "./componentTemplate";
import { typeDefinitionTemplate } from "./typeDefinitionTemplate";

const SVG_PATH = "../spor-icon/svg";
const TMP_PATH = "./tmp";
const DIST_PATH = "./dist";

await run();

async function run() {
  const icons = await loadIcons();
  const componentsPromise = generateComponents(icons);
  const typesPromise = generateTypeDefinitions(icons);
  const metadataPromise = generateMetadataJson(icons);

  await Promise.all([componentsPromise, typesPromise, metadataPromise]);
}

export type IconData = {
  icon: string;
  componentName: string;
  metadata: IconMetadata;
};

type IconMetadata = {
  category: string;
  name: string;
  modifier: string;
  size: string;
  fileName: string;
};

async function loadIcons() {
  const icons: IconData[] = [];

  const categories = await fs.readdir(SVG_PATH);
  for (const category of categories) {
    const filesInCategory = await fs.readdir(`${SVG_PATH}/${category}`);
    for (const fileName of filesInCategory) {
      const metadata = getMetadata({ fileName, category });
      const componentName = createComponentName(metadata);

      const icon = await fs.readFile(`${SVG_PATH}/${category}/${fileName}`, {
        encoding: "utf8",
      });
      icons.push({ icon, componentName, metadata });
    }
  }
  console.log(`Found ${icons.length} icons`);
  return icons;
}

type GetMetadataArgs = { fileName: string; category: string };
/** Extracts metadata from the file name, and returns it as a data structure */
function getMetadata({ fileName, category }: GetMetadataArgs): IconMetadata {
  // eslint-disable-next-line prefer-const
  let [name, modifier, size, additionalSize] = fileName
    .replace(".svg", "")
    .split("-");

  // Some icons only have a name and a size, so we need to change the naming of the different variables
  if (!size) {
    size = modifier;
    modifier = "";
  }
  // Some icons have two modifiers, so we need to check if we have a second modifier, and change the variable meaning based on that
  else if (additionalSize) {
    modifier = `${modifier}-${size}`;
    size = additionalSize;
  }
  size = getPixelSizeOrFallback(size);
  return {
    name,
    modifier,
    size,
    category,
    fileName,
  };
}

/** Gets the number of pixels of a size, or returns the argument */
function getPixelSizeOrFallback(size: string) {
  const sizeInPixelsRegex = /^\d+x\d+$/; // matches ie. "16x16", "30x30"
  return sizeInPixelsRegex.test(size) ? size.slice(0, 2) : size;
}

/** Creates the lookup key for a given icon */
function createComponentName({
  name = "",
  modifier = "",
  size = "",
}: IconMetadata) {
  return Case.pascal(`${name} ${modifier} ${size} Icon`);
}

async function generateComponents(icons: IconData[]) {
  await Promise.all(icons.map((element) => generateComponent(element)));
  await generateIndexFiles(icons);
}

async function generateComponent(iconData: IconData) {
  let jsCode = await transform(
    iconData.icon,
    {
      icon: false,
      expandProps: "end",
      ref: true,
      titleProp: false,
      svgProps: {
        role: "img",
        "aria-hidden": "true",
      },
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
      dimensions: true,
      template: componentTemplate,
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      replaceAttrValues: {
        "#2B2B2C": "currentColor",
      },
    },
    {
      componentName: iconData.componentName,
    },
  );
  jsCode = jsCode
    .replace("<svg", '<Box as="svg" display="block"')
    .replace("</svg>", "</Box>");

  return createComponentFile(iconData, jsCode);
}

function createComponentFile(iconData: IconData, content: string) {
  return fs.outputFile(
    createFilePath(iconData.metadata.category, iconData.componentName),
    content,
  );
}

function createFilePath(category: string, componentName: string) {
  return `${TMP_PATH}/${category}/${componentName}.tsx`;
}

function generateIndexFiles(icons: IconData[]) {
  const categories = getUniqueCategories(icons);

  const categoriesIndexFiles = categories.map((category) =>
    generateCategoryIndexFile(
      icons.filter((icon) => icon.metadata.category === category),
      category,
    ),
  );
  const rootIndexFile = generateRootIndexFile(categories);
  return Promise.all([...categoriesIndexFiles, rootIndexFile]);
}

function getUniqueCategories(icons: IconData[]) {
  return Object.keys(
    Object.fromEntries(icons.map((icon) => [icon.metadata.category, true])),
  );
}

function generateCategoryIndexFile(icons: IconData[], category: string) {
  const content = icons
    .map(
      (icon) =>
        `export { default as ${icon.componentName} } from "./${icon.componentName}";`,
    )
    .join("\n");

  return fs.outputFile(`${TMP_PATH}/${category}/index.ts`, content);
}

function generateRootIndexFile(categories: string[]) {
  const content = categories
    .map((category) => `export * from "./${category}";`)
    .join("\n");

  return fs.outputFile(`${TMP_PATH}/index.ts`, content);
}

function generateTypeDefinitions(icons: IconData[]) {
  const typeDefinitionString = typeDefinitionTemplate(icons);
  return fs.outputFile(`${DIST_PATH}/types.d.ts`, typeDefinitionString);
}

function generateMetadataJson(icons: IconData[]) {
  const metadata: { [key: string]: IconMetadata } = {};
  for (const entry of icons) {
    metadata[entry.componentName] = entry.metadata;
  }
  return fs.outputJson(`${DIST_PATH}/metadata.json`, metadata);
}
