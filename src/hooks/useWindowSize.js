import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      console.log('run if useEffect dep changes');
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;


}

export default useWindowSize