import { Outlet } from "@remix-run/react";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";

export default function Layout() {
  return (
    <DocsLayout>
      <Outlet />
    </DocsLayout>
  );
}
