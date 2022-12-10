import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './view/home';

const router = createBrowserRouter([
  {
    path: "/",
      element: <Home/>,
  },
  {
    path: "/",
      element: <Home/>,
  },
  {
    path: "/",
      element: <Home/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)