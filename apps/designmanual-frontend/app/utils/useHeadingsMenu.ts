import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export type HeadingsMenu = {
  text: string;
  id?: string;
};

export const useHeadingsMenu = (): Array<HeadingsMenu> | [] => {
  const location = useLocation();

  const [headingsMenu, setHeadingsMenu] = useState<Array<HeadingsMenu> | []>(
    [],
  );

  useEffect(() => {
    const headings: Array<{ text: string; id?: string }> = [];
    const h2Elements =
      typeof document === "undefined"
        ? []
        : document.querySelectorAll(
            'h2:not([data-testid="image-card-list"] h2)',
          );

    if (h2Elements.length > 0) {
      for (const element of h2Elements) {
        const text = element.textContent?.trim() || "";

        const id =
          element.id ||
          text
            .toLowerCase()
            .replaceAll(/\s+/g, "-")
            .replaceAll(/[^a-z0-9-]/g, "");

        headings.push({ text, id });
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadingsMenu(headings);
  }, [location]);

  return headingsMenu;
};
