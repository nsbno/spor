export type HeadingsMenu = {
  text: string;
  id?: string;
};

export const useHeadingsMenu = (): Array<HeadingsMenu> => {
  const getHeadings = (): Array<HeadingsMenu> => {
    if (typeof document === "undefined") return [];
    const h2Elements = document.querySelectorAll("h2");
    return [...h2Elements].map((element) => {
      const text = element.textContent?.trim() || "";
      const id =
        element.id ||
        text
          .toLowerCase()
          .replaceAll(/\s+/g, "-")
          .replaceAll(/[^a-z0-9-]/g, "");
      return { text, id };
    });
  };

  return getHeadings();
};
