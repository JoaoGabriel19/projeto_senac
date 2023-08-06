import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

import App from './App.tsx';
import AVencer from './aVencer.tsx';
import ADM from './adm.tsx';
import { Registro } from './registro.tsx';
import CobrancaFutura from './cobrancaFutura.tsx';
import CobrancaAntecipada from './cobrancaFutura.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/aVencer',
    element: <AVencer />,
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
    path: '/cobrancaAntecipada',
    element: <CobrancaAntecipada />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
