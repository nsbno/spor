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

    const imports = generateImportStatements(dictionary.allProperties);

    const transformedTokens = dictionary
      .allProperties
      .map(generateElmConstant);

    
    return [
      `module ${moduleName} exposing (${exposing})`,
      '',
      fileHeader,
      '',
      `{-| @docs ${exposing} -}`,
      '',
    ].concat(...imports)
     .concat(...transformedTokens)
     .join('\n');
  },
};

const moduleNamePrefix = 'Spor.Token.';
const defaultIndentation = '    ';

function generateModuleName(file: string): string {
    return moduleNamePrefix + file.replace('\.elm', '').replace('\/', '\.');
}

function generateImportStatements(tokens: Array<TransformedToken>): Array<string> {
    const imports = tokens.map(typeAndConstructor).map((tc) => tc.type.imports);
    const processedImports = processImports(imports);
    
    return formatImports(processedImports);
}

function processImports(configs: Array<ImportConfig>): ImportConfig {
    const output: ImportConfig = {};

    for (let config of configs) {
        for (let key in config) {
            const value = config[key];

            if (key in output) {
                const existingValue = output[key];
                existingValue.alias = existingValue.alias || value.alias;

                for (let exposing in value.exposings) {
                    existingValue.exposings.add(exposing);
                }
            } else {
                output[key] = value;
            }
        }
    }
    
    return output;
}

function formatImports(imports: ImportConfig): Array<string> {
    const output = [];

    for (let key in imports) {
        const value = imports[key];
        
        const alias = value.alias ? ` as ${value.alias}` : '';
        const exposingList = Array.from(value.exposings).join(', ');
        const exposings = exposingList.length > 0 ? ` exposing (${exposingList})` : '';
        
        output.push(`import ${key}${alias}${exposings}`);
    }

    // Make sure there's an empty line before Elm definitions
    output.push('');

    return output;
}

function generateElmConstant(token: TransformedToken): Array<string> {
    const name = token.name;
    const typeInfo = typeAndConstructor(token);
    
    return [
        `{-| ${token.comment || ''} -}`,
        `${name} : ${typeInfo.type.name}`,
        `${name} =`,
        `${defaultIndentation}${typeInfo.constructor(token.value)}`,
        '',
        ''
    ];
}

type TypeAndConstructor = {
    type: TypeInfo;
    constructor: (input: any) => string;
};

type TypeInfo = {
    name: string;
    imports: ImportConfig;
};

type ImportConfig = Record<string, {
    alias: string | null;
    exposings: Set<string>;
}>;

function typeAndConstructor(token: TransformedToken): TypeAndConstructor {
    if (token.path[0] === 'color') {
        if (token.value.startsWith('#')) {
            return {
                type: {
                    name: 'Color',
                    imports: { 
                        'Spor.Token.Color': {
                            alias: null,
                            exposings: new Set([ 'Color' ])
                        },
                        'Spor.Token.Internal.Types': {
                            alias: 'Types', 
                            exposings: new Set()
                        },
                        'Css': {
                            alias: null,
                            exposings: new Set()
                        }
                    }
                },
                constructor: (input) => {
                    return `Types.Color <| Css.hex ${asString(input)}`
                }
            };
        } else if (token.value.startsWith('rgba')) {
            return {
                type: {
                    name: 'Color',
                    imports: { 
                        'Spor.Token.Color': {
                            alias: null,
                            exposings: new Set([ 'Color' ])
                        },
                        'Spor.Token.Internal.Types': {
                            alias: 'Types', 
                            exposings: new Set() 
                        },
                        'Css': {
                            alias: null,
                            exposings: new Set()
                        }
                    }
                },
                constructor: (input: string) => {
                    // remove the first five characters 'rgba(' and the last character ')
                    const args = input.slice(5, -1).split(',').map((s) => s.trim());
                    return `Types.Color <| Css.rgba ${args[0]} ${args[1]} ${args[2]} ${args[3]}`
                }
            };
        } else {
            throw new Error(`Don\'t know how to handle this color value: ${token.value}`);
        }
    }
    
    return {
        type: {
            name: 'String',
            imports: {}
        },
        constructor: asString
    };
}

function asString(input: any): string {
    const output = input.toString();

    return `\"${output.replaceAll('"', '\\"')}\"`;
}
