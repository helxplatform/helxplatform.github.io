import { useEffect, useRef } from "react";
import { getRandomInteger } from "../utils";

/**
 * Continously sets timeouts with random delays between `min` and `max` milliseconds.
 * Updating the `callback` function will not interrupt the interval. Updating `min`
 * or `max` will immediately restart the interval under the new range. Setting `min`  
 * or `max` to `null` will pause the interval.
 */
export const useRandomInterval = (callback, min, max) => {
  const callbackRef = useRef(null);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const timeoutIdRef = useRef(null);
  useEffect(() => {
    if (typeof min === "number" && typeof max === "number") {
      const setNextTimeout = () => {
        timeoutIdRef.current = setTimeout(
          () => {
            callbackRef.current();
            setNextTimeout();
          },
          getRandomInteger(min, max)
        );
      };
      setNextTimeout();

      return () => clearTimeout(timeoutIdRef.current);
    }
  }, [min, max]);
};
