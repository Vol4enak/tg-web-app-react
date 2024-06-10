import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsSelectors } from "../../redux/Product";
import { authSelectors } from "../../redux/auth";
import { filterActiveUserBasketProducts } from "../../utils/filterActiveBasketProducts";
import ProductList from "../ProductList/ProductList";
import { productsOperations } from "../../redux/Product";
import { useNavigate } from "react-router-dom";
const Basket = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isToken = useSelector(authSelectors.getUserToken);
  const allProducts = useSelector(productsSelectors.getAllProducts);
  const userProducts = useSelector(productsSelectors.getUserProduct);
  const userBasketProducts = useSelector(productsSelectors.getUserBasket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isToken) {
      navigate("/", { replace: true });
    }
  }, [isToken, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(productsOperations.fetchUserProducts());
    }
  }, [dispatch, isLoggedIn]);
  const updatedProducts = filterActiveUserBasketProducts(
    allProducts,
    userProducts,
    userBasketProducts
  );
  if (!updatedProducts) {
    console.log(updatedProducts);
    return <div>Загрузка...</div>;
  }
  return <ProductList products={updatedProducts} />;
};
export default Basket;
