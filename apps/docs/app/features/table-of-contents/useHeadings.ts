import { useEffect, useRef, useState } from "react";
import { HeadingLevelType, HeadingType } from "./TableOfContents";

/**
 * Returns a list of all headings inside of whatever the ref is placed on.
 */
export const useHeadings = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  useEffect(() => {
    const headingList: HeadingType[] = [];
    contentRef.current?.querySelectorAll("h2, h3, h4, h5, h6").forEach((el) => {
      if (!el.id) {
        return;
      }
      headingList.push({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName.toLowerCase() as HeadingLevelType,
      });
    });
    setHeadings(headingList);
  }, []);
  console.log(headings);
  return { headings, contentRef };
};
