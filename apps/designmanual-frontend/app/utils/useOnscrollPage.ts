import { useEffect, useRef } from "react";

/**
 * Hook: calls onStart() the first time the user scrolls (scrollY > 5),
 * calls onReachMax() the first time scrollY >= 120,
 * and calls onBackToTop() when the user scrolls back to the top (scrollY <= 5).
 * onStart/onReachMax/onBackToTop are fired as the scroll passes those thresholds;
 * internal flags are reset when returning to top so triggers can fire again.
 */

export function useScrollTriggers(
  onStart?: () => void,
  onReachMax?: () => void,
  onBackToTop?: () => void,
) {
  const startedRef = useRef(false);
  const reachedRef = useRef(false);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const MINIMUM_SCROLL_TO_SNAP = 60;
    const SCROLL_TO_REACH_MAX = 120;

    function handle() {
      const y = window.scrollY || window.pageYOffset || 0;

      if (!startedRef.current && y > MINIMUM_SCROLL_TO_SNAP) {
        startedRef.current = true;
        onStart?.();
      }

      if (!reachedRef.current && y >= SCROLL_TO_REACH_MAX) {
        reachedRef.current = true;
        onReachMax?.();
      }

      // when user scrolls back to (near) top, reset flags and call back
      if (startedRef.current && y <= MINIMUM_SCROLL_TO_SNAP) {
        startedRef.current = false;
        reachedRef.current = false;
        onBackToTop?.();
      }
    }

    // run once to catch initial position
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [onStart, onReachMax, onBackToTop]);
}
