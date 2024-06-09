import Notiflix from "notiflix";
import productsOperations from "./product-operation"; // предполагается, что пути корректны

const onAddFavorite = (product, dispatch, isLoggedIn) => {
  console.log(product._id, ": product");
  console.log(dispatch, ": dispatch");
  console.log(isLoggedIn, ": isLoggedIn");

  if (!isLoggedIn) {
    Notiflix.Report.failure(
      "Notiflix Failure",
      '"Зарееструйтесь або увійдіть в свій акаунт щоб додавати товари до списку бажань."',
      "Okay"
    );
    return;
  }
  const { _id, favorite } = product;
  const updatedProduct = { favorite: !favorite, _id };

  dispatch(productsOperations.toggleCompleted(_id, updatedProduct, "favorite"));
};

const onAddBasket = (product, dispatch, isLoggedIn) => {
  if (!isLoggedIn) {
    Notiflix.Report.failure(
      "Notiflix Failure",
      '"Зарееструйтесь або увійдіть в свій акаунт щоб додавати товари до кошика."',
      "Okay"
    );
    return;
  }
  const { _id, basket } = product;
  const updatedProduct = { basket: !basket };

  dispatch(productsOperations.toggleCompleted(_id, updatedProduct, "basket"));
};

export { onAddFavorite, onAddBasket };
