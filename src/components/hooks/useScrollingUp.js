import { useEffect, useState } from 'react';

const on = (obj, ...args) => {
  obj.addEventListener(...args);
};

const off = (obj, ...args) => {
  obj.removeEventListener(...args);
};

const useScrollingUp = () => {
  let prevScroll = window.pageYOffset;
  const [scrollingUp, setScrollingUp] = useState(false);
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll;
    setScrollingUp(currScroll === 0 ? false : isScrolled);
    prevScroll = currScroll;
  };
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true });
    return () => {
      off(window, 'scroll', handleScroll, { passive: true });
    };
  }, []);
  return scrollingUp;
};

export default useScrollingUp;
