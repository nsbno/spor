import * as fs from 'fs/promises';
import * as path from 'path';
import camelCase from 'camelcase';
import svg2elm from 'svg2elm';
import * as svgo from 'svgo';

const svgFolder = '../spor-icon/svg';
const targetFolder = './src/Spor/Icon';

async function generateSvgs() {
    await fs.rm('./src', { recursive: true });
    await fs.mkdir(targetFolder, { recursive: true });

    (await fs.readdir(svgFolder))
        .map((folderName) => {
            return {
                name: camelCase(folderName, { pascalCase: true }),
                path: path.join(svgFolder, folderName)
            };
        }).map(async (module) => {
            const svgPromises = (await fs.readdir(module.path))
                .filter((fileName) => fileName.endsWith('.svg'))
                .map(async (fileName) => {
                    const filePath = path.join(module.path, fileName);

                    const svg = await fs.readFile(filePath, { encoding: 'utf-8' });
                    const optimizedSvg = svgo.optimize(svg);

                    const elmName = camelCase(fileName.replace(/.svg$/, ''));
                    const elmSvg = await svg2elm.generateSvgFunction(elmName, optimizedSvg.data);

                    return elmSvg;
                });

            const moduleHeader = svg2elm.generateModuleHeader(`Spor.Icon.${module.name}`);
            const src = [moduleHeader].concat(await Promise.all(svgPromises))
                .join('\n\n\n{-|-}\n');

            return {
                ...module,
                src: src
            };
        }).forEach(async (modulePromise) => {
            const module = await modulePromise;

            const targetFile = path.join(targetFolder, `${module.name}.elm`);

            await fs.writeFile(targetFile, module.src);
        });
}

generateSvgs();
