import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (value) {
      // Set a timeout only if a search exp is set

      // Wait for the completion of the input delay before setting state
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cleanup function that clears the setTimeout callback
      // if value is updated before delay completion
      return () => {
        clearTimeout(handler);
      };
    } else {
      // No need to wait otherwise, set the value right away
      setDebouncedValue(value);
    }
  }, [value, delay]);

  // Return the hook's state
  return debouncedValue;
};

export default useDebounce;
