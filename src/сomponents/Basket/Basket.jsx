import { useSelector } from "react-redux";
import { productsSelectors } from "../../redux/Product";
import { authSelectors } from "../../redux/auth";

import { Navigate } from "react-router-dom";
const Basket = () => {

  const products = useSelector(productsSelectors.getAllProducts);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!products) {
    console.log(products);
    return <div>Загрузка...</div>;
  }
  return <>{isLoggedIn ? <div>123</div> : <Navigate to="/login" />}</>;
};
export default Basket;
