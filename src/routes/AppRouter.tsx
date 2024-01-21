import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from '../components/pages/HomePage';
import ProductDetailsPage from '../components/pages/ProductDetailsPage'
import WishlistPage from '../components/pages/WishListPage';
import LoginPage from '../components/pages/LoginPage';


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
    {
      path: "/login",
      element: <LoginPage/>
    },
  ]);

export default AppRouter;
