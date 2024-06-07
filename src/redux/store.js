import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import { productsReduser } from "./product";
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whilelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    products: productsReduser,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// import { configureStore,  } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage";
// import { productsReduser } from "./Product";
// import { authReducer } from "./persistReduser";

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     product: productsReduser,
//   },

//   devTools: process.env.NODE_ENV === "development",
// });

// setupListeners(store.dispatch);
//
