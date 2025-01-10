// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const instructorsApi = createApi({
  reducerPath: "instructorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getInstructors: builder.query({
      query: () => "instructors",
    }),
  }),
});

export const { useGetInstructorsQuery } = instructorsApi;
