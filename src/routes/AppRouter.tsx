import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from '../components/pages/HomePage';
import ProductDetailsPage from '../components/pages/ProductDetailsPage'
import WishlistPage from '../components/pages/WishListPage';


const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/products/:id",
      element: <ProductDetailsPage/>
    },
    {
      path: "/wishlist",
      element: <WishlistPage/>
    },
  ]);

export default AppRouter;
