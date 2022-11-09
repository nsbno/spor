import { useLocation } from "@remix-run/react";
import { useLayoutEffect, useRef, useState } from "react";
import { HeadingLevelType, HeadingType } from "./TableOfContents";

/**
 * Returns a list of all headings inside of whatever the ref is placed on.
 */
export const useHeadings = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  useLayoutEffect(() => {
    const id = setTimeout(() => {
      const headingList: HeadingType[] = [];
      contentRef.current?.querySelectorAll("h2, h3, h4").forEach((el) => {
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
    }, 16);
    return () => clearTimeout(id);
  }, [location]);
  return { headings, contentRef };
};
