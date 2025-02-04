export const config = {
  preflight: true,
  cssVarsPrefix: "spor",
  cssVarsRoot: ":where(:root, :host)",
  /* strictTokens: true, */ /* Should be turned on at some point */
  conditions: {
    off: "&:is([data-state=off])",
    on: "&:is([data-state=on])",
  },
};
