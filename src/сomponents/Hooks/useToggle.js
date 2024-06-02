import { useState, useCallback } from "react";

const useToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggle = useCallback(() => {
    setIsVisible((prevState) => !prevState);
  }, []);

  const setVisibility = useCallback((state) => {
    setIsVisible(state);
  }, []);

  return [isVisible, toggle, setVisibility];
};

export default useToggle;
