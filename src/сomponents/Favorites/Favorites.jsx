import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsOperations, productsSelectors } from "../../redux/product";

const Favorites = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getAllProducts);
  const loading = useSelector(productsSelectors.getLoading);

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.description}</li>
      ))}
    </ul>
  );
};

export default Favorites;
