import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./pages/App.jsx";
import RestaurantDetail from "./pages/RestaurantDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/restaurants/:id", element: <RestaurantDetail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);