import type { GroqStore, Subscription } from "@sanity/groq-store";
import { useEffect } from "react";
import { sanityConfig } from "./config";

type UsePreviewSubscriptionArgs<T> = {
  query: string | null;
  params?: Record<string, unknown> | null;
  onChange: (data: T) => void;
};
export const usePreviewSubscription = <T>({
  query,
  params,
  onChange,
}: UsePreviewSubscriptionArgs<T>) => {
  useEffect(() => {
    if (!query) {
      return;
    }

    let subscription: Subscription | null = null;
    let store: GroqStore | null = null;

    async function createStore() {
      // For more details about configuring groq-store see:
      // https://www.npmjs.com/package/@sanity/groq-store
      const { groqStore } = await import("@sanity/groq-store");

      const { projectId, dataset } = sanityConfig;

      store = groqStore({
        projectId,
        dataset,
        listen: true,
        overlayDrafts: true,
        documentLimit: 1000,
      });

      subscription = store.subscribe(
        query as string,
        params ?? {},
        (err, result) => {
          if (err) {
            console.error(
              "An error occurred while fetching preview data from Sanity:",
              err
            );
            return;
          }
          if (result.length) {
            onChange(result);
          }
        }
      );
    }

    if (!store) {
      createStore();
    }

    return () => {
      if (subscription?.unsubscribe()) {
        subscription.unsubscribe();
      }
      if (store) {
        store.close();
      }
    };
  }, [query, params, onChange]);
};
