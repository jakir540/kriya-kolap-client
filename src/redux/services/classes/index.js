// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const classesApi = createApi({
  reducerPath: "classesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kriya-kolap-sever-jakir540.vercel.app/",
  }),
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: () => "approvedClasses",
    }),

    getPopularClasses: builder.query({
      query: () => "classes",
    }),
  }),
});

export const { useGetClassesQuery, useGetPopularClassesQuery } = classesApi;
