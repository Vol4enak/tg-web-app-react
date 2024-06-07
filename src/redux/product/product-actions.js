import { createAction } from '@reduxjs/toolkit';

export const fetchProductRequest = createAction('products/fetchProductRequest');
export const fetchProductSuccess = createAction('products/fetchProductsSuccess');
export const fetchProductError   = createAction('products/fetchProductsError');

export const addProductRequest    = createAction('products/addProductsRequest');
export const addProductSuccess   = createAction('products/addProductssuccess');
export const addProductError      = createAction('products/addProductsError');

export const deleteProductRequest = createAction('products/deleteProductsRequest');
export const deleteProductSuccess = createAction('products/deleteProductsuccess');
export const deleteProductError    = createAction('products/deleteProductsError');

export const toggleCompletedRequest = createAction(
  'products/toggleCompletedRequest',
);
export const toggleCompletedSuccess = createAction(
  'products/toggleCompletedSuccess',
);
export const toggleCompletedError = createAction('products/toggleCompletedError');


// const dispatch = useDispatch();
//   useEffect(() => {
//     console.log(dispatch(productsOperations.fetchProducts()));
//   }, [dispatch]);