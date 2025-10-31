import * as serverOnly from "@sanity/react-loader";

import { getClient } from "~/utils/sanity/client";
const { loadQuery, setServerClient } = serverOnly;
setServerClient(
  getClient().withConfig({ token: process.env.VITE_SANITY_SECRET }),
);
export { loadQuery };
