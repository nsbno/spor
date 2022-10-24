import { transform } from "@svgr/core";
import Case from "case";
import fs from "fs-extra";

const SVG_PATH = "../spor-icon/svg";
const TMP_PATH = "./tmp";
const DIST_PATH = "./dist";

run();

async function run() {
  const icons = await loadIcons();
  const componentsPromise = generateComponents(icons);
  const typesPromise = generateTypeDefinitions(icons);

  await Promise.all([componentsPromise, typesPromise]);
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
  let icons: IconData[] = [];

  const categories = await fs.readdir(SVG_PATH);
  for (let category of categories) {
    const filesInCategory = await fs.readdir(`${SVG_PATH}/${category}`);
    for (let fileName of filesInCategory) {
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
  return sizeInPixelsRegex.test(size) ? size.substring(0, 2) : size;
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
  await Promise.all(icons.map(generateComponent));
  await generateRootIndexFile(icons);
}

async function generateComponent(iconData: IconData) {
  let jsCode = await transform(
    iconData.icon,
    {
      icon: false,
      expandProps: "end",
      ref: true,
      titleProp: false,
      svgo: true,
      svgoConfig: {
        removeViewBox: false,
      },
      native: true,
      replaceAttrValues: {
        "#2B2B2C": `{theme.colors[color] ?? "#2B2B2C"}`,
      },
    },
    {
      componentName: iconData.componentName,
    }
  );

  // Since we don't own the template, we need to change the generated code
  // to make it work as we want.
  // The most straight-forward way to do this is by using string replacement.
  // It looks hacky, it is hacky, but it works.
  jsCode = "import { Box, useTheme } from 'app/spor';\n" + jsCode;
  jsCode = jsCode
    .replace("{...props}", "")
    .replace("props", '{ color = "darkGrey", width, height, ...props }')
    // Weird regex alert!
    // Replaces `width={18}` with
    // `width={props.style?.width ?? width ?? 18}`
    .replace(/width={(\d+)}/, "width={props.style?.width ?? width ?? $1}")
    // Replaces `height={18}` with
    // `height=props.style?.height ?? height ?? 18}`
    .replace(/height={(\d+)}/, "height={props.style?.height ?? height ?? $1}")
    .replace(
      "<Svg",
      "{ \n\tconst theme = useTheme(); \n\treturn <Box {...props}><Svg"
    )
    .replace("</Svg>", "</Svg></Box>}");

  return createComponentFile(iconData, jsCode);
}

function createComponentFile(iconData: IconData, content: string) {
  return fs.outputFile(createFilePath(iconData.componentName), content);
}

function createFilePath(componentName: string) {
  return `${TMP_PATH}/${componentName}.tsx`;
}

function generateRootIndexFile(icons: IconData[]) {
  const content = icons
    .map(
      (icon) =>
        `export { default as ${icon.componentName}} from "./${icon.componentName}";`
    )
    .join("\n");

  return fs.outputFile(`${TMP_PATH}/index.ts`, content);
}

function generateTypeDefinitions(icons: IconData[]) {
  const typeDefinitionString = typeDefinitionTemplate(icons);
  return fs.outputFile(`${DIST_PATH}/types.d.ts`, typeDefinitionString);
}

const typeDefinitionTemplate = (iconsData: IconData[]) => {
  return `
// This file was auto-generated.
// Please do not change this file directly.
import type { BoxProps } from "app/spor";
import type { ForwardRefExoticComponent } from "react";

declare module "@vygruppen/spor-icon-react-native" {
  type IconProps = BoxProps & { color?: BoxProps["backgroundColor"] };
  export type IconComponent = ForwardRefExoticComponent<IconProps>;

  ${iconsData
    .map(({ componentName }) => `export const ${componentName}: IconComponent;`)
    .join("\n  ")}
}
`;
};
