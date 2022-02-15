import fs from "fs/promises";
import path from "path";

/** Gets the file buffer of the spor icon .zip file */
export const getIconsZipFile = async () => {
  const iconsPath = await getIconsPath();
  return fs.readFile(iconsPath);
};

const getIconsPath = async (currentPath: string = "."): Promise<string> => {
  const pathToCheck = path.resolve(
    currentPath,
    "..",
    "node_modules",
    "@vygruppen",
    "spor-icon",
    "dist",
    "spor-icons.zip"
  );

  if (await doesFileExist(pathToCheck)) {
    return pathToCheck;
  }
  if (currentPath === "/") {
    throw new Error("No icons zip found");
  }
  return await getIconsPath(path.resolve("..", currentPath));
};

const doesFileExist = async (filePath: string) => {
  try {
    await fs.stat(filePath);
    return true;
  } catch (e) {
    return false;
  }
};
