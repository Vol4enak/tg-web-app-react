import { Routes, Route } from "react-router-dom";
import { useTelegram } from "../Hooks/useTelegram";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  HomePage,
  BasketPage,
  CategoryPage,
  FavoritesPage,
  LoginPage,
  RegisterPage,
} from "../pages";
import NavBar from "../сomponents/Nav/NavBar";
import css from "./App.module.css";
import { authOperations } from "../redux/auth";

function App() {
  const { tg } = useTelegram();
  const dispatch = useDispatch();
  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
