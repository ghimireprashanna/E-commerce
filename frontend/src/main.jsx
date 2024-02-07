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
import Dashboard from './module/admin/Dashboard/index.jsx'
import Users from './module/admin/Users/index.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'signup',
        element: <BlockAuthRoute><Signup/></BlockAuthRoute>
      },
      {
        path: 'login',
        element: <BlockAuthRoute><Login/></BlockAuthRoute>
      },
      {
        path: 'admin',
        element: <Dashboard/>,
        children: [
          {
            path: 'dashboard',
            element: <Home/>
          },
          {
            path: 'users',
            element: <Users/>
          },
        ]
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
