import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "url";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/spor-react/src/**/*.mdx",
    "../../../packages/spor-react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      // react-docgen-typescript follows TypeScript types transitively into
      // node_modules (spor-react → @chakra-ui/react → @ark-ui/react → …),
      // resulting in 23 000+ lines of declarations being parsed — which causes
      // the production build to hang at the "transforming…" stage indefinitely.
      reactDocgen: false,
    },
  },
  refs: {
    "@chakra-ui/react": { disable: true },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        {
          // Rollup (used by Vite production builds) hangs when it encounters
          // "use client" / "use server" RSC directives in node_modules such as
          // framer-motion, next-themes and @chakra-ui/react. Strip them out so
          // Rollup can process the module graph without getting stuck.
          name: "strip-rsc-directives",
          enforce: "pre",
          transform(code, id) {
            if (!id.includes("node_modules")) return null;
            const cleaned = code.replace(
              /^(['"])use (client|server)\1;?\s*\n?/m,
              "",
            );
            return cleaned !== code ? { code: cleaned, map: null } : null;
          },
        },
      ],
      optimizeDeps: {
        // Explicitly include all external deps used by @vygruppen/spor-react and
        // its workspace dependencies. This prevents Vite from discovering them
        // mid-page-load (which would trigger a re-optimization, causing a
        // browserHash mismatch and module loading failures).
        // Note: @vygruppen/spor-react is excluded here because it is aliased
        // directly to its source files (see resolve.alias below), so Vite
        // treats it as a local module with full HMR support rather than a
        // pre-bundled dependency.
        exclude: ["@vygruppen/spor-react"],
        include: [
          "@vygruppen/spor-icon-react",
          "@vygruppen/spor-loader",
          "@vygruppen/spor-design-tokens",
          "@ark-ui/react",
          "@ark-ui/react/anatomy",
          "@ark-ui/react/collapsible",
          "@ark-ui/react/popover",
          "@chakra-ui/react",
          "@emotion/react",
          "@emotion/styled",
          "@internationalized/date",
          "awesome-phonenumber",
          "lottie-react",
          "next-themes",
          "react-aria",
          "react-icons/lu",
          "react-stately",
          "react-swipeable",
          "usehooks-ts",
        ],
      },
      resolve: {
        alias: {
          // Resolve spor-react to its source so that Vite watches the files
          // directly and HMR works without needing a separate build step.
          "@vygruppen/spor-react": fileURLToPath(
            new URL(
              "../../../packages/spor-react/src/index.tsx",
              import.meta.url,
            ),
          ),
          // spor-react source uses @/ as a path alias for its own src directory.
          "@/": fileURLToPath(
            new URL("../../../packages/spor-react/src/", import.meta.url),
          ),
        },
        dedupe: ["react", "react-dom", "@chakra-ui/react", "@emotion/react"],
      },
    });
  },
};

export default config;
