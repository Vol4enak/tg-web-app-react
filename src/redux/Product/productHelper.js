import Notiflix from "notiflix";
import productsOperations from "./productOperation"; // предполагается, что пути корректны

const onAddFavorite = (product, dispatch, isLoggedIn) => {
  if (!isLoggedIn) {
    Notiflix.Report.failure(
      "Notiflix Failure",
      '"Зарееструйтесь або увійдіть в свій акаунт щоб додавати товари до списку бажань."',
      "Okay"
    );
    return;
  }
  const { _id } = product;
  const updatedProduct = { _id };

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
  const { _id } = product;
  const updatedProduct = { _id };

  dispatch(productsOperations.toggleCompleted(_id, updatedProduct, "basket"));
};

export { onAddFavorite, onAddBasket };
