import type { Config } from "@svgr/core";

export const defaultTemplate: Config["template"] = (variables, { tpl }) => {
  return tpl`
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
};

export const componentTemplate: Config["template"] = (variables, { tpl }) => {
  return tpl`
${variables.imports};
import { Box } from "@vygruppen/spor-layout-react";

${variables.interfaces};

/**
 * Custom made icon.
 * 
 * You can set the color of the icon by setting the text color of the surrounding element.
 * 
 * \`\`\`tsx
 * <SomeIcon color="alias.darkGreen" />
 * \`\`\`
 * 
 * You can set the size of the icon by setting the font size of the surrounding element.
 * 
 * \`\`\`tsx
 * <SomeIcon fontSize="xl" />
 * \`\`\`
 * 
 * If you're using the icon on its own, remember to set the \`aria-label\` prop with an alternative text for screen readers.
 * \`\`\`tsx
 * <SomeIcon aria-label="Example text"/>
 * \`\`\`
 */
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
};
