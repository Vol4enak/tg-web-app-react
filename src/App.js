import { useTelegram } from "./сomponents/Hooks/useTelegram";
import { useEffect } from "react";
import Header from "./сomponents/Header/Header";
import { Routes, Route } from "react-router-dom";
import ProductList from "./сomponents/ProductList/ProductList";
import Form from "./сomponents/Form/Form";

function App() {
  const {  tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
