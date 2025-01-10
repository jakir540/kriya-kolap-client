// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const classesApi = createApi({
  reducerPath: "classesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: () => "approvedClasses",
    }),
  }),
});

export const { useGetClassesQuery } = classesApi;
