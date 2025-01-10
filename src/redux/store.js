import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { classesApi } from "./services/classes";

export const store = configureStore({
  reducer: { [classesApi.reducerPath]: classesApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(classesApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
