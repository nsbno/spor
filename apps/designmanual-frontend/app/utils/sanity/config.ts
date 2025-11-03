/* eslint-disable @typescript-eslint/no-explicit-any */
const projectId = import.meta.env.VITE_SANITY_TOKEN || "r4xpzxak";
const sanitySecret = import.meta.env.VITE_SANITY_SECRET || "";

export function getRuntimeEnv(key: string): string | undefined {
  // Client: window.__ENV__ injected by server
  if (globalThis.window !== undefined && (globalThis as any).__ENV__) {
    return (globalThis as any).__ENV__[key];
  }
  // Server: process.env
  if (typeof process !== "undefined") {
    return (process.env as any)[key];
  }
  // Build-time fallback (may be empty if built once for all envs)
  return (import.meta as any).env?.[key];
}

export const VITE_ENVIRONMENT = getRuntimeEnv("VITE_ENVIRONMENT") || "local";

const environment = VITE_ENVIRONMENT;

const dataset =
  environment === "prod" || environment === "stage" ? "production" : "test";

export const sanityConfig = {
  apiVersion: "2022-02-25",
  projectId,
  dataset,
  useCdn: true,
  token: sanitySecret,
  stega: {
    enabled: true,
    studioUrl: "https://vydesignmanual.sanity.studio/", // env.VITE_PUBLIC_SANITY_STUDIO_URL || "http://localhost:4444",
  },
};
