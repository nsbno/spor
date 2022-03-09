import { Outlet } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function ResourcesPage() {
  return (
    <DocsLayout>
      <Outlet />
    </DocsLayout>
  );
}
