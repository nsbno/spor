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
        "packages/spor-logo-react/",
        "packages/spor-input-react/",
        "packages/spor-i18n-react/",
        "packages/spor-button-react/",
        "packages/spor-layout-react/",
        "packages/spor-typography-react/",
        "packages/spor-icon/",
        "packages/spor-icon-react/",
        "packages/spor-image-react/",
        "packages/spor-card-react/",
        "packages/spor-modal-react/",
      ],
    },
  },
};
