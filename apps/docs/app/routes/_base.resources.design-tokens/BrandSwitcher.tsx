import { useFetcher } from "@remix-run/react";
import {
  Brand,
  Heading,
  Stack,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@vygruppen/spor-react";

import { useBrand } from "~/utils/brand";

export const BrandSwitcher = () => {
  const fetcher = useFetcher();
  const brand = useBrand();

  const handleTabChange = (value: string) => {
    const formData = new FormData();
    formData.set("brand", value);
    fetcher.submit(formData, {
      method: "post",
      action: "/",
    });
  };

  return (
    <Stack gap="2">
      <Heading as="h2" variant="md" fontWeight="bold">
        Theme
      </Heading>
      <fetcher.Form method="post" action="/api/brand">
        <Tabs
          variant="accent"
          size="md"
          value={brand as string}
          onValueChange={(e) => handleTabChange(e.value)}
        >
          <TabsList onChange={(v) => console.log(v)}>
            {[Brand.VyDigital, Brand.VyUtvikling, Brand.CargoNet].map(
              (brand) => (
                <TabsTrigger width={[null, 100]} value={brand}>
                  {brand}
                </TabsTrigger>
              ),
            )}
          </TabsList>
        </Tabs>
      </fetcher.Form>
    </Stack>
  );
};
