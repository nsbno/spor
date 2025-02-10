import { useFetcher } from "@remix-run/react";
import { Brand, Select, Button } from "@vygruppen/spor-react";
import { useMatchesData } from "~/utils/useMatchesData";

export const BrandSwitcher = () => {
  const fetcher = useFetcher();
  const data = useMatchesData("root");
  const brand = data?.brand ?? Brand.VyDigital;

  console.log(data?.brand);
  return (
    <fetcher.Form method="post" action="/api/brand">
      {/* <Select
        name="brand"
        defaultValue={brand as any}
        collection={brand}
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
      </Select> */}
      <Button
        onClick={(e: any) => {
          const formData = new FormData();
          formData.set("brand", Brand.VyDigital);
          fetcher.submit(formData, {
            method: "post",
            action: "/",
          });
        }}
        variant="primary"
        className="dark"
      >
        VyDigital
      </Button>
      <Button
        onClick={(e: any) => {
          const formData = new FormData();
          formData.set("brand", Brand.CargoNet);
          fetcher.submit(formData, {
            method: "post",
            action: "/",
          });
        }}
        variant="primary"
        className="dark"
      >
        Cargonet
      </Button>
    </fetcher.Form>
  );
};
