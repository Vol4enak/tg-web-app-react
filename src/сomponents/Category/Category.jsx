import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../ProductList/ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { productsOperations, productsSelectors } from "../../redux/Product";
import { useParams } from "react-router-dom";
export const Category = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector(productsSelectors.getAllProducts);
  useEffect(() => {
    dispatch(productsOperations.fetchCategoris(params.categoryName));
  }, [dispatch, params.categoryName]);

  return (
    <main>
      <ul className={css.list}>
        {products.map(
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
              key={id}
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
              
            />
          )
        )}
      </ul>
    </main>
  );
};
