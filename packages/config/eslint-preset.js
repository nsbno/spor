module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "packages/config/",
        "packages/tsconfig/",
        "packages/spor-theme-react/",
        "packages/spor-react/",
      ],
    },
  },
};
