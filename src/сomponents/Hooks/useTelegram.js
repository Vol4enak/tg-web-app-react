import { useState, useCallback } from "react";
const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
}

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
