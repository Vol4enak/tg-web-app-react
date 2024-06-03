import { useTelegram } from "../Hooks/useTelegram";
import { useEffect } from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Form from "../Form/Form";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";


function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch("https://fakestoreapi.in/api/products?limit=150")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  // fetch(" https://api.escuelajs.co/api/v1/products?limit=105")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  // fetch(" https://fake-store-api.mock.beeceptor.com/api/products") 9
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  return (
    <>
      <Header />
      <div className={css.app}>
        <SearchBar />

        <Routes>
          <Route index element={<ProductList />} />
          <Route path={"form"} element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
