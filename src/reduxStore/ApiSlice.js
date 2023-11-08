import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnershipApi = createApi({
  reducerPath: "partnershipApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.skilla.ru/" }),
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: ({ start, end }) => ({
        url: `/mango/getList?date_start=${start}&date_end=${end}&limit=${1000}`,

        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
          "Content-type": "application/json",
        },
      }),
    }),
    addVoice: build.mutation({
      query: ({ recordId, partnerID }) => ({
        url: `/mango/getRecord?record=${recordId}&partnership_id=${partnerID}`,

        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
          "Content-Type":
            "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
          "Content-Transfer-Encoding": "binary",
          "Content-Disposition": 'filename="record.mp3',
        },
      }),
    }),
  }),
});

export const { useAddProductMutation, useAddVoiceMutation } = partnershipApi;
