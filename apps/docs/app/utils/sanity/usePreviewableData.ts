import { useEffect, useState } from "react";
import { useLoaderData } from "remix";
import { usePreviewSubscription } from "./usePreviewSubscription";
import { filterDataToSingleItem } from "./utils";

export type PreviewableLoaderData<T extends { _id: string }> = {
  initialData: T[];
  isPreview: boolean;
  query: string | null;
  queryParams: Record<string, unknown> | null;
};
export const usePreviewableData = <T extends { _id: string }>() => {
  const { initialData, isPreview, query, queryParams } =
    useLoaderData<PreviewableLoaderData<T>>();
  const [currentData, setCurrentData] = useState(initialData);
  usePreviewSubscription({
    query,
    params: queryParams,
    onChange: setCurrentData,
  });
  useEffect(() => setCurrentData(initialData), [initialData]);
  return {
    data: filterDataToSingleItem(currentData, isPreview),
    isPreview,
  };
};
