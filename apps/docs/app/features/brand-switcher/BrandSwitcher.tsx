import { useFetcher } from "@remix-run/react";
import { NativeSelect } from "@vygruppen/spor-react";
import { useBrand } from "~/utils/brand";

export const BrandSwitcher = () => {
  const fetcher = useFetcher();
  const brand = useBrand();

  return (
    // Use native select until spor select is available
    <fetcher.Form method="post" action="/api/brand">
      <NativeSelect
        label="Brand"
        value={brand as string}
        onChange={(e: any) => {
          const formData = new FormData();
          formData.set("brand", e.target.value);
          fetcher.submit(formData, {
            method: "post",
            action: "/",
          });
        }}
      >
        <option value="VyDigital">Vy Digital</option>
        <option value="VyUtvikling">Vy Utvikling</option>
        <option value="CargoNet">CargoNet</option>
      </NativeSelect>
    </fetcher.Form>
  );
};
