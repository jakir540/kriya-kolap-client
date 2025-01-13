// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kriya-kolap-sever-jakir540.vercel.app/",
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "blogs",
    }),
    getSingleBlog: builder.query({
      query: (blogId) => `blogs/${blogId}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogsApi;
