//import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/react-router";

//import { getClient } from "~/utils/sanity/client";

//const stegaClient = getClient().withConfig({ stega: true });

export function SanityVisualEditing() {
  //useLiveMode({ client: stegaClient });

  return <VisualEditing />;
}
