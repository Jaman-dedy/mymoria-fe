import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from '../components/pages/HomePage';


const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
  ]);

export default AppRouter;
