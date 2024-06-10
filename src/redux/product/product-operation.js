import axios from "axios";
import {
  userProductRequest,
  userProductSuccess,
  userProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "./product-action";

// GET @ /products
const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const { data } = await axios.get("/products/data");
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};


const fetchUserProducts = () => async (dispatch) => {
  dispatch(userProductRequest());
  try {
    const { data } = await axios.get("/products/findByStatus");
    dispatch(userProductSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(userProductError(error.message));
  }
};


const fetchCategoris = (category) => async (dispatch) => {
  dispatch(fetchProductsRequest());

  try {
    // Передаем категорию в запросе как query параметр
    const { data } = await axios.get(
      `/products/findByCategory?category=${category}`
    );
    console.log(data);
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};

// DELETE @ /products/:id
const deleteProduct = (productId) => (dispatch) => {
  dispatch(deleteProductRequest());

  axios
    .delete(`/products/${productId}`)
    .then(() => dispatch(deleteProductSuccess(productId)))
    .catch((error) => dispatch(deleteProductError(error.message)));
};

// PATCH @ /products/:id
const toggleCompleted = (id, data, name) => (dispatch) => {
  dispatch(toggleCompletedRequest());

  axios
    .patch(`/products/${id}/${name}`, data)
    .then(({ data }) => {
      dispatch(toggleCompletedSuccess(data.favorites));
      console.log(data.favorites);
    })
    .catch((error) => dispatch(toggleCompletedError(error)));
};

const productsOperations = {
  fetchProducts,
  fetchCategoris,
  fetchUserProducts,

  deleteProduct,
  toggleCompleted,
};
export default productsOperations;
