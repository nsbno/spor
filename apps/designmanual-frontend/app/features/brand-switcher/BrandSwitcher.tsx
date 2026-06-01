import {
  createListCollection,
  Select,
  SelectItem,
} from "@vygruppen/spor-react";
import { useFetcher } from "react-router";

import { useBrand } from "~/utils/brand";

export const BrandSwitcher = () => {
  const fetcher = useFetcher();
  const brand = useBrand();
  const brandOptions = createListCollection({
    items: [
      { label: "Vy Digital", value: "VyDigital" },
      { label: "Vy Utvikling", value: "VyUtvikling" },
      { label: "CargoNet", value: "CargoNet" },
    ],
  });

  return (
    <fetcher.Form method="post">
      <Select
        label="Brand"
        collection={brandOptions}
        defaultValue={[brand as string]}
        onValueChange={(brand) => {
          const formData = new FormData();
          formData.set("brand", brand.value[0]);
          fetcher.submit(formData, {
            method: "post",
            action: "/",
          });
        }}
        css={{ zIndex: "toast !important" }}
      >
        {brandOptions.items.map((option, index) => (
          <SelectItem key={index} item={option}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </fetcher.Form>
  );
};
