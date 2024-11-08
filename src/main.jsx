import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="max-w-7xl mx-auto">
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
