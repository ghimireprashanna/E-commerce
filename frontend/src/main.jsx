import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './module/Home/index.jsx'
import Signup from './module/auth/Signup/index.jsx'
import Login from './module/auth/Login/index.jsx'
import AuthProvider from './context/auth/AuthProvider.jsx'
import Toaster from './module/common/Toaster/index.jsx'
import ToastProvider from './context/toast/ToastProvider.jsx'
import BlockAuthRoute from './routes/BlockAuthRoute.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home/></PrivateRoute>
      },
      {
        path: '/signup',
        element: <BlockAuthRoute><Signup/></BlockAuthRoute>
      },
      {
        path: '/login',
        element: <BlockAuthRoute><Login/></BlockAuthRoute>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
    <AuthProvider>
      <Toaster />
    <RouterProvider router={router} />
    </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
)
