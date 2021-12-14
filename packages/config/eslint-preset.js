module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "packages/spor-react/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
