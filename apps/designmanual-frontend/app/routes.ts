import { route, type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

//export default flatRoutes() satisfies RouteConfig;
export default [
  ...(await flatRoutes()),
  route("api/preview-mode/enable", "routes/api/preview-mode/enable.ts"),
  route("api/preview-mode/disable", "routes/api/preview-mode/disable.ts"),
] satisfies RouteConfig;
