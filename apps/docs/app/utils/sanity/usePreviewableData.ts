import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { usePreviewSubscription } from "./usePreviewSubscription";
import { filterDataToSingleItem } from "./utils";

export type PreviewableLoaderData<Data extends { _id: string }> = {
  /** The initial data from the server */
  initialData: Data[];
  /** Whether or not preview is enabled */
  isPreview: boolean;
  /** The GROQ query */
  query: string | null;
  /** Any query parameters */
  queryParams: Record<string, unknown> | null;
};
/**
 * Get automatically updating data whenever you're in preview mode.
 *
 * You need to pass in the type of Sanity data you want to use, and you'll get back an object with automatically updating data.
 */
export const usePreviewableData = <Data extends { _id: string }>() => {
  const { initialData, isPreview, query, queryParams } =
    useLoaderData<PreviewableLoaderData<Data>>();

  const [currentData, setCurrentData] = useState(initialData);
  useEffect(() => setCurrentData(initialData), [initialData]);

  usePreviewSubscription({
    query,
    params: queryParams,
    onChange: setCurrentData,
  });

  return {
    data: filterDataToSingleItem(currentData as any, isPreview) as Data,
    isPreview,
  };
};
