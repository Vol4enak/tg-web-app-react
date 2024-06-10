import React from "react";
import css from "./ProductList.module.css";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { productsSelectors } from "../../redux/Product";
import { updateProductsWithActiveField } from "../../utils/productUtils";
const ProductList = () => {
  const allProducts = useSelector(productsSelectors.getAllProducts);
  const userProducts = useSelector(productsSelectors.getUserProduct);

  // Функция для обновления продуктов с добавлением поля active
  const updatedProducts = updateProductsWithActiveField(
    allProducts,
    userProducts
  );

  if (!updatedProducts) {
    return <div>Загрузка...</div>;
  }

  return (
    <ul className={css.list}>
      {updatedProducts.map(
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
          active,
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
            active={active}
          />
        )
      )}
    </ul>
  );
};

export default ProductList;
