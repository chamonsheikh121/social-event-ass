import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </AuthProvider>

)
