import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import './lib/I18n.jsx'

import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Inicio from './routes/Inicio.jsx';
import MG from './routes/MG.jsx';
import TO from './routes/TO.jsx';
import RS from './routes/RS.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path : "/",
        element : <Inicio/>
      },
      {
        path : "MG",
        element : <MG/>
      },
      {
        path : "TO",
        element : <TO/>
      },
      {
        path : "RS",
        element : <RS/>
      },
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
