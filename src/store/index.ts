import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./API/productApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./API/productApi";
