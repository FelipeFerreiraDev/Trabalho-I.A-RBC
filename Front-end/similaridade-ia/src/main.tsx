import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Casos } from './view/casos';
import { Footer } from './components/footer';

const router = createBrowserRouter([
  {
    path: "/casos",
      element: <Casos/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
)