import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Casos } from './view/casos';
import { LerArquivo } from './view/lerArquivo';

const router = createBrowserRouter([
  {
    path: "/casos",
      element: <Casos/>,
  },
  {
    path: "/",
      element: <LerArquivo/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)