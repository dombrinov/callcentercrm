import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnershipApi = createApi({
  reducerPath: "partnershipApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.skilla.ru/" }),
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: ({ start, end }) => ({
        url: `/mango/getList?date_start=${start}&date_end=${end}&limit=${10}`,

        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const { useAddProductMutation } = partnershipApi;
