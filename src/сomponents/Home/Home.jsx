import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productActions,
  productsSelectors,
  productsOperations,
} from "../../redux/Product";
import { updateProductsWithActiveField } from "../../utils/productUtils";
import css from "./Home.module.css";
import ProductList from "../ProductList/ProductList";
import { authSelectors } from "../../redux/auth";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const allProducts = useSelector(productsSelectors.getAllProducts);
  const userProducts = useSelector(productsSelectors.getUserProduct);
  const userBasketProducts = useSelector(productsSelectors.getUserBasket);
  const [loadedProductsCount, setLoadedProductsCount] = useState(15); // Начальное количество загруженных продуктов
  const productsPerPage = 15; // Количество продуктов, загружаемых за раз

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(productsOperations.fetchUserProducts());
    }
    return () => {
      dispatch(productActions.setSearchQuery(""));
    };
  }, [dispatch, isLoggedIn]);

  // useEffect(() => {
  //   dispatch(
  //     productsOperations.fetchProducts(pageProductsCount, loadedProductsCount)
  //   );
  // }, [dispatch, loadedProductsCount, pageProductsCount]);

  const query = useSelector(productsSelectors.getQuery); // получаем значение query из состояния

  const updatedProducts = updateProductsWithActiveField(
    allProducts,
    userProducts,
    userBasketProducts
  );

  const filteredProducts = updatedProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleLoadMore = () => {
    setLoadedProductsCount((prevCount) => prevCount + productsPerPage);
  };

  if (!updatedProducts) {
    return <div>Загрузка...</div>;
  }
  const slicedProducts = filteredProducts.slice(0, loadedProductsCount);
  return (
    <>
      <ProductList products={slicedProducts} />
      {loadedProductsCount <= filteredProducts.length && (
        <button onClick={handleLoadMore} className={css.dowloadMore}>
          Загрузить еще
        </button>
      )}
      <ScrollToTopButton />
    </>
  );
};

export default Home;
