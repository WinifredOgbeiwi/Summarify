// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const Key = import.meta.env.VITE_X_RapidAPI_Key;
const BASE_URL = "https://article-extractor-and-summarizer.p.rapidapi.com";

export const summaryApi = createApi({
  reducerPath: "summaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e3f3c25f16msh4ddfc1d718c25cbp1fed13jsn942b811a92b0"
      );
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.url)}`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = summaryApi;





