import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Routes from "./router/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes()}>
    <Layout />
  </RouterProvider>
);
