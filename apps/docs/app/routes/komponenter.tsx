import { Outlet } from "remix";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function Layout() {
  return (
    <DocsLayout>
      <Outlet />
    </DocsLayout>
  );
}
