import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "url";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/spor-react/src/**/*.mdx",
    "../../../packages/spor-react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    // Docgen walks every component file (and, with react-docgen-typescript,
    // follows types into node_modules: spor-react → @chakra-ui/react →
    // @ark-ui/react → …), which makes the production build hang at the
    // "transforming…" stage. Storybook only reads this option here, not under
    // framework.options.
    reactDocgen: false,
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
          // next-themes and @chakra-ui/react. Strip them out so
          // Rollup can process the module graph without getting stuck.
          name: "strip-rsc-directives",
          enforce: "pre",
          transform(code: string, id: string) {
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
        // The "@vygruppen/spor-react > dep" syntax resolves each dep from
        // spor-react's own node_modules, so this app does not have to declare
        // them. Entries listed in resolve.dedupe are still resolved from this
        // app's root, which is why those must stay in package.json.
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
          "@internationalized/date",
          "awesome-phonenumber",
          "clsx",
          "lottie-react",
          "next-themes",
          "react-aria",
          "react-icons/lu",
          "react-stately",
          "react-swipeable",
          "usehooks-ts",
        ].map((dep) => `@vygruppen/spor-react > ${dep}`),
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
        // spor-react and spor-icon-react must share one copy of these for
        // React/Chakra/Emotion context to work. pnpm can install several
        // peer-dependency variants, so pin them to the copy this app declares.
        dedupe: ["react", "react-dom", "@chakra-ui/react", "@emotion/react"],
      },
    });
  },
};

export default config;
