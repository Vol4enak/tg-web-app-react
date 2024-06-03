import { Routes, Route } from "react-router-dom";
import { BurgerMenuProvider } from "../СontextAPI/ContextAPI";
import { useTelegram } from "../../Hooks/useTelegram";
import { useEffect } from "react";
import { Home } from "../../pages/Home";
import { Category } from "../../pages/Category";
import NavBar from "../Nav/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BurgerMenuProvider>
      <div className={css.container}>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          {/* <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} /> */}
        </Routes>
      </div>
    </BurgerMenuProvider>
  );
}

export default App;
