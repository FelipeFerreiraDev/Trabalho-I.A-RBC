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
import { Header } from './components/header';
import { Menu } from './view/menu';

const router = createBrowserRouter([
  {
    path: "/casos",
      element: <Casos/>,
  },
  {
    path: "/candidatos",
    element: <Candidatos/>,
  },
  {
    path: "/",
    element: <Menu/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
)