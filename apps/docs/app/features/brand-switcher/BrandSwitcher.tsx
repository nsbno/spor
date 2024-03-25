import { useFetcher } from "@remix-run/react";
import { Brand, NativeSelect } from "@vygruppen/spor-react";
import { useMatchesData } from "~/utils/useMatchesData";

export const BrandSwitcher = () => {
  const fetcher = useFetcher();
  const data = useMatchesData("root");
  const brand = data?.brand ?? Brand.VyDigital;
  return (
    <fetcher.Form method="post" action="/api/brand">
      <NativeSelect
        name="brand"
        label="Brand"
        defaultValue={brand}
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
