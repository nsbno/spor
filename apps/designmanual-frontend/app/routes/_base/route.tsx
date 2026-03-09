import { Box } from "@vygruppen/spor-react";
import { useEffect } from "react";
import {
  type LoaderFunctionArgs,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";

import { getClient } from "~/utils/sanity/client";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "drafts";
  const menu = await getClient().fetch(
    `*[_type == "menu" && slug.current == "side-menu"][0] { menuItems }`,
    {},
    { perspective: draftMode ? "previewDrafts" : "published" },
  );
  return { menu, slug };
};

export default function BaseLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/spor", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Box
      width={[null, null, null, "container.md", "container.lg"]}
      marginX="auto"
    >
      <Outlet />
    </Box>
  );
}
