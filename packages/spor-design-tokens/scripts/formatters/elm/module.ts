import { Format, Named, File, TransformedToken, formatHelpers } from 'style-dictionary';

export const elmFormatter: Named<Format> = {
  name: 'elm/module',
  formatter: function({ dictionary, file }) {
    const moduleName = generateModuleName(file.destination);

    const moduleType = generateModuleType(file.destination);

    const exposing = moduleType.exposings().concat(
        dictionary
            .allProperties
            .map((prop) => prop.name)
    )
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

    const definitions = moduleType.definitions().concat(
        dictionary
            .allProperties
            .map((prop) => generateElmConstant(prop, moduleType))
            .flat()
    );
    
    return [
      `module ${moduleName} exposing (${exposing})`,
      '',
      fileHeader,
      '',
      `{-| @docs ${exposing} -}`,
      '',
    ].concat(...moduleType.imports(), '')
     .concat(...definitions)
     .join('\n');
  },
};

const moduleNamePrefix = 'Spor.Token.';
const defaultIndentation = '    ';

function generateModuleName(fileName: string): string {
    return moduleNamePrefix + fileName.replace(/\.elm$/, '').replace('\/', '\.');
}

class ModuleType {
    name: string;
    wrappedType: ModuleTypeConstruction;

    constructor(name: string, wrappedType: ModuleTypeConstruction) {
        this.name = name;
        this.wrappedType = wrappedType;
    }

    imports(): Array<string> {
        const wrapped = this.wrappedType.innerType;
        
        if (wrapped === 'Float') {
            return [];
        } else if (wrapped === 'String') {
            return [];
        }
        
        return [ 'import Css' ];
    }

    exposings(): Array<string> {
        return [
            this.name,
            this.unwrapperName()
        ];
    }

    unwrapperName(): string {
        const wrapped = this.wrappedType.innerType;

        let unwrapper = 'toCss';
        if (wrapped === 'Float') {
            unwrapper = 'toFloat';
        } else if (wrapped === 'String') {
            unwrapper = 'toString';
        }
        
        return unwrapper;
    }

    definitions(): Array<string> {
        const unwrapperName = this.unwrapperName();
        
        return [
            '{-| -}',
            `type ${this.name} =`,
            `${defaultIndentation}${this.name} ${this.wrappedType.innerType}`,
            '',
            `{-| Convert ${this.name} into a ${this.wrappedType.innerType} -}`,
            `${unwrapperName} : ${this.name} -> ${this.wrappedType.innerType}`,
            `${unwrapperName} (${this.name} value) =`,
            `${defaultIndentation}value`,
            ''
        ];
    }
};

function generateModuleType(fileName: string): ModuleType {
    const type = fileName.replace(/^\w+\//, '').replace(/\.elm$/, '');
    const wrappedType = moduleTypeInnerType.get(type) || stringTypeConstruction;
    
    return new ModuleType(type, wrappedType);
}

type ModuleTypeConstruction = {
    innerType: string;
    construct: (input: string) => string;
};

const colorTypeConstruction: ModuleTypeConstruction = {
    innerType: 'Css.Color',
    
    construct(input: string) {
        if (input.startsWith('#')) {
            return `Css.hex ${asString(input)}`
        } else if (input.startsWith('rgba')) {
            // remove the first five characters 'rgba(' and the last character ')
            const args = input.slice(5, -1).split(',').map((s: string) => s.trim());
            return `Css.rgba ${args[0]} ${args[1]} ${args[2]} ${args[3]}`
        }
        
        throw new Error(`Don\'t know how to handle this color value: ${input}`);
    }
};

const pxTypeConstruction: ModuleTypeConstruction = {
    innerType: 'Css.Px',
    
    construct(input: string) {
        if (input.endsWith('px')) {
            const rawValue = input.replace(/px$/, '');
            return `Css.px ${rawValue}`;
        }
        
        throw new Error(`Don\'t know how to handle this size value: ${input}`);
    }
};

const floatTypeConstruction: ModuleTypeConstruction = {
    innerType: 'Float',
    construct(input: string) {
        return input;
    }
};

const stringTypeConstruction: ModuleTypeConstruction = {
    innerType: 'String',
    construct: asString
};

const moduleTypeInnerType: Map<string, ModuleTypeConstruction> = new Map([
    ['Alias', colorTypeConstruction],
    ['Background', colorTypeConstruction],
    ['Detail', colorTypeConstruction],
    ['Error', colorTypeConstruction],
    ['Linjetag', colorTypeConstruction],
    ['Main', colorTypeConstruction],
    ['Outline', colorTypeConstruction],
    ['Palette', colorTypeConstruction],
    ['Product', colorTypeConstruction],
    ['Text', colorTypeConstruction],
    ['BorderRadius', pxTypeConstruction],
    ['Breakpoint', pxTypeConstruction],
    ['LineHeight', floatTypeConstruction],
    ['Spacing', pxTypeConstruction],
    ['Stroke', pxTypeConstruction]
]);


function generateElmConstant(token: TransformedToken, moduleType: ModuleType): Array<string> {
    const name = token.name;
    
    return [
        `{-| ${token.comment || ''} -}`,
        `${name} : ${moduleType.name}`,
        `${name} =`,
        `${defaultIndentation}${moduleType.name} <| ${moduleType.wrappedType.construct(token.value)}`,
        '',
        ''
    ];
}

function asString(input: any): string {
    const output = input.toString();

    return `\"${output.replaceAll('"', '\\"')}\"`;
}
