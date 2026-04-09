import React, { useState, useEffect, useCallback, memo } from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
});

ScrollToTop.displayName = 'ScrollToTop';
export default ScrollToTop;