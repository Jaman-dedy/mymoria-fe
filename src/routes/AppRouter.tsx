import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeContainer from '../containers/Product';
import ProductDetailsPage from '../components/pages/ProductDetailsPage'
import LoginPage from '../components/pages/LoginPage';
import WishListContainer from '../containers/Wishlist';


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
      element: <WishListContainer/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
  ]);

export default AppRouter;
