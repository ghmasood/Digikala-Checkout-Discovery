import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { productsType, productType } from "../../types";
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    return {
      getAllProducts: builder.query<productsType, null>({
        query: () => {
          return {
            url: "/products",
            method: "GET",
          };
        },
      }),
      getSingleProduct: builder.query<productType, number>({
        query: (arg) => {
          return {
            url: `/products/${arg}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
