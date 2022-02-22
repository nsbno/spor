import { Badge } from "@vygruppen/spor-react";
import { Outlet } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function KomIGangLayout() {
  return (
    <DocsLayout>
      <Badge colorScheme="green" mb={1}>
        Kom i gang
      </Badge>
      <Outlet />
    </DocsLayout>
  );
}
