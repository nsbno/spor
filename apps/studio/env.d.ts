// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PREVIEW_SECRET: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
