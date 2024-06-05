import { Routes, Route } from "react-router-dom";
import { useTelegram } from "../Hooks/useTelegram";
import { useEffect } from "react";
import {
  Home,
  Basket,
  CategoryPage,
  Favorites,
  LoginPage,
  RegisterPage,
} from "../pages";
import NavBar from "../сomponents/Nav/NavBar";
import css from "./App.module.css";

function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.container}>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
