import { Format, Named, TransformedToken, formatHelpers } from 'style-dictionary';

export const elmFormatter: Named<Format> = {
  name: 'elm/module',
  formatter: function({ dictionary, file }) {
    const moduleName = generateModuleName(file.destination);

    const exposing = dictionary
      .allProperties
      .map((prop) => prop.name)
      .join(', ');
    
    const fileHeader = formatHelpers.fileHeader({
      file: file,
      formatting: {
        prefix: defaultIndentation,
        lineSeparator: '\n',
        header: '{-\n',
        footer: '\n-}'
      }
    });

    const transformedTokens = dictionary
      .allProperties
      .map(generateElmConstant);
    
    return [
      `module ${moduleName} exposing (${exposing})`,
      '',
      fileHeader,
      '',
      '',
    ].concat(...transformedTokens)
     .join('\n');
  },
};

const moduleNamePrefix = 'Spor.Token.';
const defaultIndentation = '    ';

function generateModuleName(file: string): string {
  return moduleNamePrefix + file.replace('\.elm', '').replace('\/', '\.');
}

function generateElmConstant(token: TransformedToken): Array<string> {
    const name = token.name;
    return [
        `{-| ${token.comment || ''} -}`,
        `${name} : String`,
        `${name} =`,
        `${defaultIndentation}${asString(token.value)}`,
        '',
        ''
    ];
}

function asString(input: any): string {
    const output = input.toString();

    return `\"${output.replaceAll('"', '\\"')}\"`;
}
