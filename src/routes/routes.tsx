import React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import CheckOutPage from "../pages/CheckoutPage/CheckOutPage";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import ProductsDetails from "../pages/ProductsPage/ProductsDetails";
import SuccessPage from "../pages/CheckoutPage/SuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <ProductsPage></ProductsPage>,
      },
      //
      {
        path: "/product-details",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/product-details/:selectId",
        element: <ProductsDetails></ProductsDetails>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkout",
        element: <CheckOutPage></CheckOutPage>,
      },
      {
        path: "/success",
        element: <SuccessPage></SuccessPage>,
      },
      {
        path: "/product-management",
        element: <ProductManagement></ProductManagement>,
      },
    ],
  },
]);

export default router;
