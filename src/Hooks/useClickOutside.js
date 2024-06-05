import { useEffect, useRef } from "react";

const useClickOutside = (isVisible, callback, cssClass) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleEscapePress = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    if (isVisible) {
      document.body.classList.add(cssClass);
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapePress);
    } else {
      document.body.classList.remove(cssClass);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapePress);
    }

    return () => {
      document.body.classList.remove(cssClass);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [callback, cssClass, isVisible]);

  return ref;
};

export default useClickOutside;
