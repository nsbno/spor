import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
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
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("")
        ),
      S.documentTypeListItem("article").title("Articles"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("component").title("Components"),
      S.documentTypeListItem("menu").title("Menus"),
      S.documentTypeListItem("illustration").title("Illustrations"),
    ]);
