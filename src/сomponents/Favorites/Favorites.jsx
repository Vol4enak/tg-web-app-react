import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../ProductList/ProductList.module.css";
import { productsOperations, productsSelectors } from "../../redux/Product";
import ProductItem from "../ProductItem/ProductItem";
// import { updateProductsWithActiveField } from "../../utils/productUtils";
// import Notiflix from "notiflix";
import authSelectors from "../../redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const userProductsRefresh = useSelector(
    productsSelectors.getUserProductRefresh
  );
  const userProducts = useSelector(productsSelectors.getUserProduct);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productsOperations.fetchUserProducts());
  }, [dispatch]);
  // const notisCircl = () => {
  //   if (!isLoading) {
  //     Notiflix.Loading.standard("Loading...");
  //   } else {
  //     Notiflix.Loading.remove();
  //   }
  // };
  // notisCircl();
  console.log(isLoggedIn);
  if (!userProductsRefresh) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <ul className={css.list}>
          {userProductsRefresh.map(
            ({
              _id,
              id,
              title,
              image,
              price,
              description,
              brand,
              model,
              color,
              category,
              popular,
              onSale,
              discount,
            }) => (
              <ProductItem
                key={_id}
                _id={_id}
                id={id}
                title={title}
                image={image}
                price={price}
                description={description}
                brand={brand}
                model={model}
                color={color}
                category={category}
                onSale={onSale}
                popular={popular}
                discount={discount}
                active={true}
              />
            )
          )}
        </ul>
      ) : (
        navigate("/", { replace: true })
      )}
    </>
  );
};

export default Favorites;
