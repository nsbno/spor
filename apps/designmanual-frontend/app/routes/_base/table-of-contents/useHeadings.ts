import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { HeadingLevelType, HeadingType } from "./TableOfContents";

/**
 * Returns a list of all headings inside of whatever the ref is placed on.
 */
export const useHeadings = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  useEffect(() => {
    const id = setTimeout(() => {
      const headingList: HeadingType[] = [];
      const container = contentRef.current;
      if (container) {
        for (const element of container.querySelectorAll("h2, h3, h4")) {
          if (!element.id) {
            continue;
          }
          headingList.push({
            id: element.id,
            text: element.textContent || "",
            level: element.tagName.toLowerCase() as HeadingLevelType,
          });
        }
      }
      setHeadings(headingList);
    }, 16);
    return () => clearTimeout(id);
  }, [location]);
  return { headings, contentRef };
};
