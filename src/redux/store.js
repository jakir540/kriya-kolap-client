import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { classesApi } from "./services/classes";
import { instructorsApi } from "./services/instructors";
import { blogsApi } from "./services/blogs";

export const store = configureStore({
  reducer: {
    [classesApi.reducerPath]: classesApi.reducer,

    [instructorsApi.reducerPath]: instructorsApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(classesApi.middleware)
      .concat(instructorsApi.middleware)
      .concat(blogsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
