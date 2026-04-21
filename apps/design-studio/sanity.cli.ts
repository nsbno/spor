import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "r4xpzxak",
    dataset: "production",
  },
  deployment: {
    appId: "s80fxauuj1gp6jf31mf00jt1",
    autoUpdates: true,
  },
});
