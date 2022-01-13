/** Welcome to the plopfile!
 *
 *
 * ## What is this?
 *
 * Plop is a small library that helps us scaffold out new packages and components. It uses the templates found in `plop-templates` to create new files.
 *
 * If you want to make any changes here, you can (and should) read more about Plop here:
 * https://github.com/plopjs/plop.
 *
 * ## How do I use it?
 *
 * Run `npm run add-package` to generate a new package.
 * You'll be prompted for names etc
 */
export default function (plop) {
  plop.setGenerator("package", {
    description: "Create a new package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
      },
      {
        type: "list",
        name: "type",
        message: "What type of package is this?",
        default: "react",
        choices: [
          { name: "Basic TypeScript", value: "typescript" },
          { name: "React", value: "react" },
          { name: "React Native", value: "react-native" },
          { name: "Elm", value: "elm" },
        ],
      },
    ],
    actions: (answers) => {
      let actions = [];
      switch (answers.type) {
        case "typescript":
          actions = [
            ...actions,
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}/package.json",
              templateFile: "plop-templates/typescript/package.json.hbs",
            },
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}/tsconfig.json",
              templateFile: "plop-templates/typescript/tsconfig.json.hbs",
            },
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}/README.md",
              templateFile: "plop-templates/typescript/README.md.hbs",
            },
            {
              type: "add",
              templateFile: "plop-templates/typescript/src/index.ts.hbs",
              path: "../packages/spor-{{kebabCase name}}/src/index.ts",
            },
            {
              type: "add",
              templateFile: "plop-templates/typescript/src/fileName.ts.hbs",
              path: "../packages/spor-{{kebabCase name}}/src/{{kebabCase name}}.ts",
            },
          ];
          break;
        case "react":
          actions = [
            ...actions,
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}-react/package.json",
              templateFile: "plop-templates/react/package.json.hbs",
            },
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}-react/tsconfig.json",
              templateFile: "plop-templates/react/tsconfig.json.hbs",
            },
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}-react/README.md",
              templateFile: "plop-templates/react/README.md.hbs",
            },
            {
              type: "add",
              templateFile: "plop-templates/react/src/index.tsx.hbs",
              path: "../packages/spor-{{kebabCase name}}-react/src/index.tsx",
            },
            {
              type: "add",
              templateFile: "plop-templates/react/src/ComponentName.tsx.hbs",
              path: "../packages/spor-{{kebabCase name}}-react/src/{{pascalCase name}}.tsx",
            },
          ];
          break;
        case "react-native":
          actions = [
            ...actions,
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}-react-native/package.json",
              templateFile: "plop-templates/react-native/package.json.hbs",
            },
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}-react-native/tsconfig.json",
              templateFile: "plop-templates/react-native/tsconfig.json.hbs",
            },
            {
              type: "add",
              path: "../packages/spor-{{kebabCase name}}-react-native/README.md",
              templateFile: "plop-templates/react-native/README.md.hbs",
            },
            {
              type: "add",
              templateFile: "plop-templates/react-native/src/index.tsx.hbs",
              path: "../packages/spor-{{kebabCase name}}-react-native/src/index.tsx",
            },
            {
              type: "add",
              templateFile:
                "plop-templates/react-native/src/ComponentName.tsx.hbs",
              path: "../packages/spor-{{kebabCase name}}-react-native/src/{{pascalCase name}}.tsx",
            },
          ];
          break;
        default:
          throw "Option is not yet available";
      }
      const suffix =
        answers.type === "react" || answers.type === "react-native"
          ? `-${answers.type}`
          : "";
      actions.push({
        type: "modify",
        path: "../packages/config/eslint-preset.js",
        pattern: /\s+\],/,
        template: `\n        "packages/spor-{{kebabCase name}}${suffix}/",
      ],`,
      });
      return actions;
    },
  });
}
