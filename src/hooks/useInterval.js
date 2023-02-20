import { useEffect, useRef } from "react"

/**
 * Sets interval at `delay` milliseconds. Updating the `callback` function will not 
 * interrupt the interval. Updating `delay` will immediately restart the interval.
 * Setting `delay` to `null` will pause the interval.
 */
export const useInterval = (callback, delay) => {
  const callbackRef = useRef(null);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if(typeof delay === 'number') {
      const invokeCallback = () => callbackRef.current();
      const intervalId = setInterval(invokeCallback, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay])
}
