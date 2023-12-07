import {
  MdArticle,
  MdBackupTable,
  MdBrush,
  MdCategory,
  MdMenu,
  MdSettings,
} from "react-icons/md";
import { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .icon(MdArticle)
        .child(
          S.documentTypeList("category")
            .title("Articles by Category")
            .child((categoryId) =>
              S.documentList()
                .title("Articles")
                .apiVersion("2023-12-04")
                .filter('_type == "article" && $categoryId == category._ref')
                .params({ categoryId }),
            ),
        ),
      S.listItem()
        .title("Categories")
        .icon(MdCategory)
        .child(S.documentTypeList("category")),
      S.listItem()
        .title("Components")
        .icon(MdBackupTable)
        .child(S.documentTypeList("component")),
      S.listItem()
        .title("Illustrations")
        .icon(MdBrush)
        .child(S.documentTypeList("illustration")),
      S.listItem()
        .title("Menus")
        .icon(MdMenu)
        .child(S.documentTypeList("menu")),
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(S.documentTypeList("siteSettings")),
    ]);
