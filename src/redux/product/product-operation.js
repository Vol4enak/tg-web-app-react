import axios from "axios";
import productActions from "./product-action";
export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  userProductRequest,
  userProductSuccess,
  userProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  logoutSuccess,
  changeFilter,
} = productActions;

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
  dispatch(toggleCompletedSuccess());
  try {
    const { data } = await axios.get("/products/findByStatus");
    dispatch(toggleCompletedSuccess(data));
  } catch (error) {
    dispatch(toggleCompletedSuccess(error.message));
  }
};

const fetchCategoris = (category) => async (dispatch) => {
  dispatch(fetchProductsRequest());

  try {
    // Передаем категорию в запросе как query параметр
    const { data } = await axios.get(
      `/products/findByCategory?category=${category}`
    );
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};

// PATCH @ /products/:id
const toggleCompleted = (id, data, name) => (dispatch) => {
  dispatch(toggleCompletedRequest());
  axios
    .patch(`/products/${id}/${name}`, data)
    .then(({ data }) => {
      dispatch(toggleCompletedSuccess(data));
    })
    .catch((error) => {
      const errorInfo = {
        message: error.message,
        status: error.response ? error.response.status : null,
        data: error.response ? error.response.data : null,
      };
      dispatch(toggleCompletedError(errorInfo));
    });
};

const productsOperations = {
  fetchProducts,
  fetchCategoris,
  fetchUserProducts,
  toggleCompleted,
};
export default productsOperations;
