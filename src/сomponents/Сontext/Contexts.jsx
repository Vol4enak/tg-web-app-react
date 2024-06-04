// BurgerMenuContext.js
import React, { createContext, useState, useContext } from 'react';

const BurgerMenuContext = createContext();

export const BurgerMenuProvider = ({ children }) => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setBurgerMenuOpen(prevState => !prevState);
  const closeBurgerMenu = () => setBurgerMenuOpen(false);

  return (
    <BurgerMenuContext.Provider value={{ isBurgerMenuOpen, toggleBurgerMenu, closeBurgerMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export const useBurgerMenu = () => useContext(BurgerMenuContext);
