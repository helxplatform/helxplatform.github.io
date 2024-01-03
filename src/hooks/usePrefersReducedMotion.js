import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

/**
 * @returns boolean based on user's `prefers-reduced-motion` setting
 * @see https://www.joshwcomeau.com/react/prefers-reduced-motion/#ssr-safety-6
 */
export const usePrefersReducedMotion = () => {
  // Default to no-animations, since we don't know what the
  // user's preference is on the server.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    // Set the true initial value, now that we're on the client:
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches);
    // Register our event listener
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);
  return prefersReducedMotion;
}
