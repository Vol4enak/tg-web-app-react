import React from "react";
// import Button from "../../Button/Button";
import { useSelector } from "react-redux";
import css from "./ProductItem.module.css";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
import { productsSelectors } from "../../redux/Product";
const ProductItem = () => {
  const products = useSelector(productsSelectors.getAllProducts);

  // const onAddHandler = () => {
  //   onAdd({
  //     id,
  //     title,
  //     image,
  //     price,
  //     description,
  //     brand,
  //     model,
  //     color,
  //     category,
  //     discount,
  //   });
  // };
  if (!products || !products.result) {
    return <div>Загрузка...</div>; // или любое другое сообщение/компонент загрузки
  }
  console.log(products.result);
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <>
      {products.result.map(
        ({
          id,
          title,
          image,
          price,
          description,
          brand,
          model,
          color,
          category,
          discount,
        }) => (
          <li className={css.productItem}>
            <button
              className={css.svgLike}
              // onClick={() => {
              //   onAddHandler();

              // }}
            >
              <GoHeartFill
                style={{
                  width: "15px",
                  height: "15px",
                  fill: "grey",
                }}
              />
            </button>
            <button className={css.svgBuy}>
              <HiShoppingCart
                style={{
                  width: "15px",
                  height: "15px",
                  fill: "grey",
                }}
              />
            </button>
            <img src={image} alt="" className={css.imgItem} />
            <p className={css.title}>{truncateString(title, 25)}</p>
            {/* <div className={css.description}>{product.description}</div> */}
            <p className={css.price}>
              <span>
                ціна: <b>{price} UAH</b>
              </span>
            </p>
          </li>
        )
      )}
    </>
  );
};

export default ProductItem;
// id,
// title,
// image,
// price,
// description,
// brand,
// model,
// color,
// category,
// discount,
// onAdd,
// className,
