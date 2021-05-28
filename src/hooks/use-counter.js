import { useState, useEffect } from "react";

// *** IMPORTANT ***
// custom hook name must start with `use`
const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    // here, the `forward` is dependency of this function
    // so, we will need to pass it here
  }, [forward]);

  return counter;
};

export default useCounter;
