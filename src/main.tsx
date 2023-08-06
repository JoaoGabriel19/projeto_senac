import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

import App from './App.tsx';
import SemContato from './SemContato.tsx';
import ADM from './adm.tsx';
import { Registro } from './registro.tsx';
import ComContato from './ComContato.tsx';
import { AcessoNegado }from './acessoNegado.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/SemContato',
    element: <SemContato />,
  },
  {
    path: '/ADM',
    element: <ADM />,
  },
  {
    path: '/Registro',
    element: <Registro />,
  },
  {
    path: '/ComContato',
    element: <ComContato />,
  },
  {
    path: '/AcessoNegado',
    element: <AcessoNegado />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
