"use client";

export type HeadingsMenu = {
  text: string;
  id?: string;
};

/**
 * Extracts all H2 headings from the current page
 * @returns Array of objects containing text and ID of each H2 element
 */

export const fetchHeadingsmenu = (): Array<{ text: string; id?: string }> => {
  const headings: Array<{ text: string; id?: string }> = [];
  const h2Elements = document.querySelectorAll("h2");

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

  return headings;
};
