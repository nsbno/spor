import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getAllJsonFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      if (dirent.isDirectory()) {
        return getAllJsonFiles(res);
      } else if (dirent.isFile() && res.endsWith(".json")) {
        return [res];
      } else {
        return [];
      }
    })
  );
  return files.flat();
}

function setNested(
  obj: Record<string, unknown>,
  keys: string[],
  value: unknown
) {
  let current: Record<string, unknown> = obj;
  for (const [idx, key] of keys.entries()) {
    if (idx === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) current[key] = {};
      current = current[key] as Record<string, unknown>;
    }
  }
}

export async function generateTokenModuleFromJson() {
  try {
    const tokensDir = path.resolve(__dirname, "../tokens");
    const outputDir = path.resolve(__dirname, "../dist/raw-tokens");
    const outputJsPath = path.join(outputDir, "index.js");
    const outputDtsPath = path.join(outputDir, "index.d.ts");

    await fs.mkdir(outputDir, { recursive: true });

    const jsonFiles = await getAllJsonFiles(tokensDir);

    const tokens: Record<string, unknown> = {};

    for (const file of jsonFiles) {
      const relPath = path.relative(tokensDir, file).replace(/\.json$/, "");
      const keys = relPath.split(path.sep);
      const content = await fs.readFile(file, "utf8");
      setNested(tokens, keys, JSON.parse(content));
    }

    const jsContent = `const tokens = ${JSON.stringify(
      tokens,
      null,
      2
    )};\nexport default tokens;\n`;

    const dtsContent = `declare const tokens: ${JSON.stringify(
      tokens,
      null,
      2
    )};\nexport default tokens;\n`;

    await fs.writeFile(outputJsPath, jsContent, "utf8");
    await fs.writeFile(outputDtsPath, dtsContent, "utf8");
    console.log(
      `Successfully converted all JSON tokens to JS and type declarations at ${outputDir}`
    );
  } catch (error) {
    console.error("Error converting JSON to JS/TypeScript:", error);
    throw error;
  }
}
