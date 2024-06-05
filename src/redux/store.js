import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/auth-slice";
import storage from "redux-persist/lib/storage";
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

const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedLogin = persistReducer(authPersistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    user: persistedLogin,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
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
