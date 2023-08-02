import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

import App from './App.tsx';
import AVencer from './aVencer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
   {
    path: "/aVencer",
     element: <AVencer />,
   },
  // {
  //   path: "/linkDaRota",
  //   element: <Rota />,
  // },
  // {
  //   path: "/linkDaRota",
  //   element: <Rota />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
