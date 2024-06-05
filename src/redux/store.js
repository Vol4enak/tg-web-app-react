import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReduser } from "./Product";
import { authReducer } from "./persistReduser";

const authPersistConfig = {
  key: "auth",
  storage,
  whilelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    product: productsReduser,
  },
  

  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
// setupListeners(store.dispatch);
// middleware: (getDefaultMiddleware) => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   contactsApi.middleware,
// ],
