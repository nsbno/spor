export const siteMenuStructure = {
  structure: (S) =>
    S.list()
      .title("Menu")
      .items([
        S.documentTypeListItem("siteSettings").title("Site Settings"),
        S.documentTypeListItem("section").title("Main sections"),
        S.divider(),
        S.documentTypeListItem("menu").title("Menus"),
        S.documentTypeListItem("category").title("Categories"),
        S.divider(),
        S.documentTypeListItem("article").title("Articles"),
        S.documentTypeListItem("component").title("Components"),
        S.documentTypeListItem("illustration").title("Illustrations"),
      ]),
};
