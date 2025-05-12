import { readdirSync, statSync } from "node:fs";
// eslint-disable-next-line unicorn/import-style
import { basename, extname, join } from "node:path";

export type TokenFile = {
  category: string;
  type: string;
  path: string;
};

function dirs(root: string): Array<TokenFile> {
  return readdirSync(root)
    .filter((category) => statSync(join(root, category)).isDirectory())
    .flatMap((category) => {
      const files = jsonFiles(join(root, category));
      return files.map((type) => {
        return {
          category: category,
          type: basename(type, ".json"),
          path: join(root, category, type),
        };
      });
    });
}

function jsonFiles(dir: string): Array<string> {
  return readdirSync(dir).filter((file: string) => extname(file) === ".json");
}

export const tokens: Array<TokenFile> = dirs(join("."));
