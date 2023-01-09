import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Casos } from './view/casos';
import { Footer } from './components/footer';
import { Candidatos } from './view/candidatos';

const router = createBrowserRouter([
  {
    path: "/casos",
      element: <Casos/>,
  },
  {
    path: "/candidatos",
    element: <Candidatos/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
)