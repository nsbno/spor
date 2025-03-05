import { useFetcher } from "@remix-run/react";
import { Brand } from "@vygruppen/spor-react";
import { useMatchesData } from "~/utils/useMatchesData";

export const BrandSwitcher = () => {
  const fetcher = useFetcher();
  const data = useMatchesData("root");
  const brand = data?.brand ?? Brand.VyDigital;
  return (
    // Use native select until spor select is available
    <fetcher.Form method="post" action="/api/brand">
      <select
        name="brand"
        defaultValue={brand as string}
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
      </select>
    </fetcher.Form>
  );
};
