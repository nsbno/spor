import { readdirSync, statSync } from "node:fs";
import path from "node:path";

export type TokenFile = {
  category: string;
  type: string;
  path: string;
};

function collectTokenFiles(root: string): Array<TokenFile> {
  return readdirSync(root)
    .filter((category) => statSync(path.join(root, category)).isDirectory())
    .flatMap((category) => {
      const files = jsonFiles(path.join(root, category));
      return files.map((type) => {
        return {
          category: category,
          type: path.basename(type, ".json"),
          path: path.join(root, category, type),
        };
      });
    });
}

function jsonFiles(directories: string): Array<string> {
  return readdirSync(directories).filter(
    (file: string) => path.extname(file) === ".json",
  );
}

export const tokens: Array<TokenFile> = collectTokenFiles(path.join("."));
