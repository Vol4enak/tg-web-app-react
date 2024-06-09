import axios from "axios";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
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
    console.log(data);
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};
const fetchUserProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());

  try {
    const { data } = await axios.get("/products/findByStatus");

    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};
const fetchCategoris = () => async (dispatch) => {
  dispatch(fetchProductsRequest());

  try {
    const { data } = await axios.get("/data/productsByCategory");
    console.log(data);
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};
// POST @ /products
const addProduct = (description) => (dispatch) => {
  const product = {
    description,
    completed: false,
  };

  dispatch(addProductRequest());

  axios
    .post("/products", product)
    .then(({ data }) => dispatch(addProductSuccess(data)))
    .catch((error) => dispatch(addProductError(error.message)));
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
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch((error) => dispatch(toggleCompletedError(401)));
};

const productsOperations = {
  fetchProducts,
  fetchCategoris,
  fetchUserProducts,
  addProduct,
  deleteProduct,
  toggleCompleted,
};
export default productsOperations;
