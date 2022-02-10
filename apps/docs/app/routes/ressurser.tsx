import { Badge } from "@vygruppen/spor-react";
import { Outlet } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function ResourcesPage() {
  return (
    <DocsLayout>
      <Badge colorScheme="green" mb={1}>
        Ressurser
      </Badge>
      <Outlet />
    </DocsLayout>
  );
}
