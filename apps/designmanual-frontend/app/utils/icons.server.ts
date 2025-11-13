import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

/** Gets the file buffer of the spor icon .zip file */
export const getIconsZipFile = async () => {
  const iconsPath = await getPathToIconsZipFile();
  return fs.readFile(iconsPath);
};

type getIconArgs = { category?: string; fileName?: string };
export const getIcon = async ({ category, fileName }: getIconArgs) => {
  const safeFileName = fileName?.replaceAll("..", "") ?? "";
  const safeCategory = category?.replaceAll("..", "") ?? "";
  const basePath = await getPathToIconsSvgFolder();
  try {
    return await fs.readFile(path.join(basePath, safeCategory, safeFileName));
  } catch {
    return null;
  }
};

const getPathToSporIconsFolder = async (
  currentPath: string = __dirname,
): Promise<string> => {
  const pathToCheck = path.resolve(
    currentPath,
    "..",
    "node_modules",
    "@vygruppen",
    "spor-icon",
  );

  if (await doesFileExist(pathToCheck)) {
    return pathToCheck;
  }
  if (currentPath === "/") {
    throw new Error(
      "No @vygruppen/spor-icon package found. Are you sure it's installed?",
    );
  }
  const nextPath = path.resolve(currentPath, "..");
  return await getPathToSporIconsFolder(nextPath);
};

const getPathToIconsZipFile = async () => {
  const basePath = await getPathToSporIconsFolder();
  return path.resolve(basePath, "dist", "spor-icons.zip");
};

const getPathToIconsSvgFolder = async () => {
  const basePath = await getPathToSporIconsFolder();
  return path.resolve(basePath, "svg");
};

const doesFileExist = async (filePath: string) => {
  try {
    await fs.stat(filePath);
    return true;
  } catch {
    return false;
  }
};
