import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    return {
      getAllProducts: builder.query({
        query: () => {
          return {
            url: "/products",
            method: "GET",
          };
        },
      }),
      getSingleProudct: builder.query({
        query :(arg)=>{
            
        }
      })
    };
  },
});

export const { useGetAllProductsQuery } = productsApi;
