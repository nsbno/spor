import * as serverOnly from "@sanity/react-loader";

import { getClient } from "~/utils/sanity/client";
import { VITE_SANITY_SECRET } from "~/utils/sanity/config";

const { loadQuery, setServerClient } = serverOnly;
setServerClient(getClient().withConfig({ token: VITE_SANITY_SECRET }));
export { loadQuery };
