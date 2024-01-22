import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
const LoginPage = React.lazy(() => import('../components/pages/LoginPage'));
const WishListContainer = React.lazy(() => import('../containers/Wishlist'));
const ProductDetailsPage = React.lazy(() => import('../components/pages/ProductDetailsPage'));
const HomeContainer = React.lazy(() => import('../containers/Product'));


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
