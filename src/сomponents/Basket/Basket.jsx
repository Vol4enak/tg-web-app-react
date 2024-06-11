import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsSelectors } from "../../redux/Product";
import { authSelectors } from "../../redux/auth";
import { filterActiveUserBasketProducts } from "../../utils/filterActiveBasketProducts";
import BasketItem from "../BasketItem/BasketItem";
import { productsOperations } from "../../redux/Product";
import { useNavigate } from "react-router-dom";
import ModalSucsses from "../Modal/ModalSucsses";
import useClickOutside from "../../Hooks/useClickOutside";
import useToggle from "../../Hooks/useToggle";
import css from "./Basket.module.css";
const Basket = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isVisibleSuc, setIsVisibleSuc] = useToggle(false);
  const isToken = useSelector(authSelectors.getUserToken);
  const allProducts = useSelector(productsSelectors.getAllProducts);
  const userProducts = useSelector(productsSelectors.getUserProduct);
  const userBasketProducts = useSelector(productsSelectors.getUserBasket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navref = useClickOutside(
    isVisibleSuc,
    () => {
      setIsVisibleSuc(false);
    },
    css.noScroll
  );

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
  return (
    <>
      {updatedProducts.length ? (
        <>
          <h2 className={css.basketTitle}>Кошик.</h2>
          <ul className={css.list}>
            {updatedProducts.map((product) => (
              <BasketItem
                key={product._id}
                _id={product._id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                brand={product.brand}
                model={product.model}
                discount={product.discount}
                color={product.color}
                activeBasket={product.activeBasket}
              />
            ))}
          </ul>
          <button
            className={css.confirmBtn}
            onClick={() => {
              setIsVisibleSuc(true);
            }}
          >
            Замовити
          </button>
          {isVisibleSuc && (
            <>
              <h2 className={css.basketTitle}>Кошик замовлень.</h2>
              <ModalSucsses navref={navref} setIsVisibleSuc={setIsVisibleSuc} />
            </>
          )}
        </>
      ) : (
        <h2 className={css.basketTitle}>Кошик порожній.</h2>
      )}
    </>
  );
};
export default Basket;
