import { useEffect, useRef, useState } from "react";

export const handleExternalMenu = (link: string, isPreview: boolean) => {
  const IS_INTERNAL_REGEX = /^(\/|https:\/\/design\.vy\.no)/;
  const isExternal = link.startsWith("https://");
  const isInternal = IS_INTERNAL_REGEX.test(link);
  const isDevelopmentEnvironment =
    link.includes("localhost") || link.includes("test");
  const isStageEnvironment = link.includes("stage");
  const domainToReplace = () => {
    if (isDevelopmentEnvironment) return "http://localhost:3008";
    if (isStageEnvironment) return "https://stage-design.vy.no";
    return "https://design.vy.no";
  };
  if (isExternal && !isInternal) return link;
  if (isInternal)
    return `${link.replace(domainToReplace(), "")}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`;
  return `${link}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`;
};

export const useStickymenu = () => {
  // runtime fallback: detect if an ancestor prevents sticky and switch to fixed
  const asideRef = useRef<HTMLDivElement | null>(null);
  const [forceFixed, setForceFixed] = useState(false);
  const [fixedRect, setFixedRect] = useState<{
    left: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const elementAsideMenu = asideRef.current;
    if (!elementAsideMenu || globalThis.window === undefined) return;

    const check = () => {
      let ancestor: HTMLElement | null = elementAsideMenu.parentElement;
      let broken = false;
      while (ancestor && ancestor !== document.documentElement) {
        const cs = getComputedStyle(ancestor);
        if (
          /(hidden|auto|scroll)/.test(
            `${cs.overflow} ${cs.overflowX} ${cs.overflowY}`,
          )
        ) {
          broken = true;
          break;
        }
        if (
          cs.transform !== "none" ||
          cs.perspective !== "none" ||
          (cs.willChange &&
            cs.willChange !== "auto" &&
            cs.willChange.includes("transform"))
        ) {
          broken = true;
          break;
        }
        ancestor = ancestor.parentElement;
      }

      if (broken) {
        const r = elementAsideMenu.getBoundingClientRect();
        setFixedRect({
          left: Math.round(r.left),
          width: Math.round(r.width),
          height: Math.round(r.height),
        });
        setForceFixed(true);
      } else {
        setForceFixed(false);
        setFixedRect(null);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return { asideRef, forceFixed, fixedRect };
};
