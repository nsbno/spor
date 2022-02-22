import * as React from "react";

/**
 * Accepts a list of selectors, and returns the active ID.
 *
 * ```tsx
 * const activeId = useScrollSpy(['#foo', '#bar']);
 * ```
 *
 * You can also specify any intersection observer options as a second argument:
 *
 * ```tsx
 * const activeId = useScrollSpy(['#foo', '#bar'], {
 *   rootMargin: '0% 0% -24% 0%',
 * });
 * ```
 *
 * Adapted from the Chakra UI docs
 * @see https://github.com/chakra-ui/chakra-ui-docs/blob/main/src/hooks/use-scrollspy.ts
 */
export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = React.useState<string>();
  const observer = React.useRef<IntersectionObserver | null>(null);
  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    );
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute("id") || undefined);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}
