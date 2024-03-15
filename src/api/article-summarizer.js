// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const Key = process.env.REACT_APP_X_RapidAPI_Key;
const BASE_URL = "https://tldrthis.p.rapidapi.com";

export const summaryApi = createApi({
  reducerPath: "summaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", Key);
      headers.set("X-RapidAPI-Host", "tldrthis.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (input) => ({
        url: "/v1/model/abstractive/summarize-url/",
        method: "POST",
        body: {
          url: input,
          min_length: 100,
          max_length: 300,
          is_detailed: false,
        },
      }),
    }),
  }),
});

export const { useGetSummaryQuery } = summaryApi;
