import { index, type RouteConfig } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;

/* export default [
  route("/", "routes/home.tsx"),
  route("spor", "routes/spor/route.tsx"),
  route("/:slug", "routes/$/route.tsx"),
] satisfies RouteConfig; */
