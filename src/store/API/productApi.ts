import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  productReqType,
  productSearchReqType,
  productsType,
  productType,
} from "../../types";
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    return {
      getSingleProduct: builder.query<productType, number>({
        query: (arg) => {
          return {
            url: `/products/${arg}`,
            method: "GET",
          };
        },
      }),
      getSearchProduct: builder.query<productsType, productSearchReqType>({
        query: ({ limit, skip, search }) => {
          return {
            url: search === "" ? `/products` : "/products/search",
            method: "GET",
            params: { q: search, limit: limit, skip: skip },
          };
        },
      }),
    };
  },
});

export const { useGetSingleProductQuery, useGetSearchProductQuery } =
  productsApi;
