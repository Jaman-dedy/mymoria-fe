import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeContainer from '../containers/Product';
import ProductDetailsPage from '../components/pages/ProductDetailsPage'
import WishlistPage from '../components/pages/WishListPage';
import LoginPage from '../components/pages/LoginPage';


const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomeContainer/>
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
