import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {store} from './store/store';
import './index.css';
import AppRouter from './routes/AppRouter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
      </React.Suspense>
      <ToastContainer/>
  </React.StrictMode>
);

reportWebVitals();
