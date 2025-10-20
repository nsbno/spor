// components/DisablePreviewMode.tsx
import { useEffect } from "react";
import { useSearchParams } from "react-router";

import { getClient } from "~/utils/sanity/client";

export function DisablePreviewMode() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const preview = searchParams.get("preview") === "true";
    getClient().config({
      perspective: preview ? "previewDrafts" : "published",
    });
  }, [searchParams]);

  return null;
}
