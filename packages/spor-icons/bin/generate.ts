import { transform } from "@svgr/core";
import Case from "case";
import fs from "fs-extra";

run();

async function run() {
  const icons = await loadIcons();
  await generateComponents(icons);
  // generateMetadataJson(icons);
}

type IconData = {
  icon: string;
  componentName: string;
  metadata: IconMetadata;
};

type IconMetadata = {
  category: string;
  name: string;
  modifier: string;
  size: string;
};

async function loadIcons() {
  let icons: IconData[] = [];

  const categories = await fs.readdir("./icons");
  for (let category of categories) {
    const filesInCategory = await fs.readdir(`./icons/${category}`);
    for (let fileName of filesInCategory) {
      const metadata = getMetadata({ fileName, category });
      const componentName = createComponentName(metadata);

      const icon = await fs.readFile(`./icons/${category}/${fileName}`, {
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
  let [name, modifier, size, additionalSize] = fileName
    .replace(".svg", "")
    .split("-");
  if (additionalSize) {
    modifier = `${modifier}-${size}`;
    size = additionalSize;
  }
  size = getPixelSizeOrFallback(size);
  return { name, modifier, size, category };
}

/** Gets the number of pixels of a size, or returns the argument */
function getPixelSizeOrFallback(size: string) {
  const sizeInPixelsRegex = /^\d+x\d+$/; // matches ie. "16x16", "30x30"
  return sizeInPixelsRegex.test(size) ? size.substring(0, 2) : size;
}

/** Creates the lookup key for a given icon */
function createComponentName({ name, modifier, size }: IconMetadata) {
  return Case.pascal(`${name} ${modifier} ${size} Icon`);
}

async function generateComponents(icons: IconData[]) {
  await Promise.all(icons.map(generateComponent));
  await generateIndexFiles(icons);
}

async function generateComponent(iconData: IconData) {
  const jsCode = await transform(
    iconData.icon,
    {
      icon: true,
      typescript: true,
      expandProps: "end",
      ref: true,
      titleProp: false,
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      replaceAttrValues: {
        "#2B2B2C": "currentColor",
      },
    },
    {
      componentName: iconData.componentName,
    }
  );
  return createComponentFile(iconData, jsCode);
}

function createComponentFile(iconData: IconData, content: string) {
  return fs.outputFile(
    createFilePath(iconData.metadata.category, iconData.componentName),
    content
  );
}

function createFilePath(category: string, componentName: string) {
  return `dist/${category}/${componentName}.tsx`;
}

function generateIndexFiles(icons: IconData[]) {
  const categories = getUniqueCategories(icons);

  const categoriesIndexFiles = categories.map((category) =>
    generateCategoryIndexFile(
      icons.filter((icon) => icon.metadata.category === category),
      category
    )
  );
  const rootIndexFile = generateRootIndexFile(categories);
  return Promise.all([...categoriesIndexFiles, rootIndexFile]);
}

function getUniqueCategories(icons: IconData[]) {
  return Object.keys(
    icons.reduce(
      (prev, icon) => ({ ...prev, [icon.metadata.category]: true }),
      {}
    )
  );
}

function generateCategoryIndexFile(icons: IconData[], category: string) {
  const content = icons
    .map(
      (icon) =>
        `export { default as ${icon.componentName} } from "./${icon.componentName}";`
    )
    .join("\n");

  return fs.outputFile(`dist/${category}/index.ts`, content);
}

function generateRootIndexFile(categories: string[]) {
  const content = categories
    .map((category) => `export * from "./${category}";`)
    .join("\n");

  return fs.outputFile(`dist/index.ts`, content);
}
