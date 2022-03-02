import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import { resolveProductionUrl } from "./resolveProductionUrl";

// Here we declare which view panes show up for which schema types
export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "article") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({ url: resolveProductionUrl })
        .title("Preview"),
    ]);
  }

  return S.document();
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("article").title("Articles"),
      S.documentTypeListItem("category").title("Categories"),
    ]);
