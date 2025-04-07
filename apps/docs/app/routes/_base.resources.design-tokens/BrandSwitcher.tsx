import {
  Box,
  Brand,
  Heading,
  HStack,
  Stack,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@vygruppen/spor-react";

import { useFetcher } from "@remix-run/react";
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
        <Tabs variant="accent" size="md" defaultValue={brand as string}>
          <TabsList onChange={(v) => console.log(v)}>
            {[Brand.VyDigital, Brand.CargoNet, Brand.VyUtvikling].map(
              (brand) => (
                <TabsTrigger
                  width={[null, 100]}
                  value={brand}
                  onClick={() => handleTabChange(brand)}
                >
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
