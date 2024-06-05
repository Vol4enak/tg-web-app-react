import { Routes, Route } from "react-router-dom";
import { useTelegram } from "../Hooks/useTelegram";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Favorites } from "../pages/Favorites";
import { Basket } from "../pages/Basket";
import NavBar from "../сomponents/Nav/NavBar";
import SearchBar from "../сomponents/SearchBar/SearchBar";
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
        <SearchBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
      </Routes>
    </div>
  );
}

export default App;
