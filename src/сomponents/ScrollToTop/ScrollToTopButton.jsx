// Ваш компонент или страница
import React, { useState, useEffect, useRef } from "react";
import css from "./ScrollToTopButton.module.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prevScroll = useRef(0);

  const toggleVisibility = () => {
    const scrolled = window.scrollY;
    const delta = scrolled - (prevScroll.current || 0);
    prevScroll.current = scrolled;

    if (scrolled > 100 && delta <= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={() => {
            scrollToTop();
          }}
          className={css.scrollToTopButton}
        >
          <FaArrowUp
            style={{
              width: "20px",
              height: "20px",
              
            }}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
