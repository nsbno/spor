export const config = {
  preflight: true,
  cssVarsPrefix: "spor",
  cssVarsRoot: ":where(:root, :host)",
  /* strictTokens: true, */
  conditions: {
    off: "&:is([data-state=off])",
    on: "&:is([data-state=on])",
  },
};
