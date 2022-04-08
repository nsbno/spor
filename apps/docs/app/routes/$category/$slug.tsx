import { LoaderFunction, Outlet } from "remix";
import { BaseLayout } from "~/features/layouts/base-layout/BaseLayout";
import { DocsLayout } from "~/features/layouts/docs-layout/DocsLayout";
import { getClient } from "~/utils/sanity/client";

export const loader: LoaderFunction = async () => {
  const menu = await getClient().fetch(
    `*[_type == "menu" && slug.current == "side-menu"][0] { menuItems }`
  );
  return { menu };
};

export default function CategoryLayout() {
  return (
    <BaseLayout>
      <DocsLayout>
        <Outlet />
      </DocsLayout>
    </BaseLayout>
  );
}
