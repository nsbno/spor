import { Outlet } from "remix";
import { BaseLayout } from "~/features/layouts/base-layout/BaseLayout";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function Layout() {
  return (
    <BaseLayout>
      <DocsLayout>
        <Outlet />
      </DocsLayout>
    </BaseLayout>
  );
}
