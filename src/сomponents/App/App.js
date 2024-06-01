import { useTelegram } from "../Hooks/useTelegram";
import { useEffect } from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Form from "../Form/Form";
import css from "./App.module.css";
// import getPopularMovieFromServer from "./api/apiProduct";
function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <div className={css.app}>
        <Routes>
          <Route index element={<ProductList />} />
          <Route path={"form"} element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
