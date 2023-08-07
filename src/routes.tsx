import { createBrowserRouter } from 'react-router-dom'

import AppLayout from '@/Layouts/AppLayout'
import CenterLayout from '@/Layouts/CenterLayout'
import UserLayout from '@/Layouts/UserLayout'

import Home from '@/Pages/Home'
import Login from '@/Pages/Login'
import NotFound from '@/Pages/NotFound'
import Portfolio from '@/Pages/Portfolio'
import Products from '@/Pages/Products'
import Transaction from '@/Pages/Transaction'
import Accounts from '@/Pages/Users/Accounts'
import Notification from '@/Pages/Users/Notification'
import Working from '@/Pages/Working'

import AuthGuardLayout from './Layouts/AuthGuardLayout'

const router = createBrowserRouter([
  {
    path: '',
    element: <AuthGuardLayout />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'products',
            children: [
              {
                path: '',
                element: <Products />,
              },
              {
                path: 'bonds',
                element: <Products />,
              },
              {
                path: 'stocks',
                element: <Products />,
              },
            ],
          },
          {
            path: 'transaction',
            children: [
              {
                path: '',
                element: <Transaction />,
              },
              {
                path: 'bonds',
                element: <Transaction />,
              },
              {
                path: 'stocks',
                element: <Transaction />,
              },
            ],
          },
          {
            path: 'portfolio',
            element: <Portfolio />,
          },
        ],
      },
      {
        element: <UserLayout />,
        path: 'user',
        children: [
          {
            path: '',
            element: <Accounts />,
          },
          {
            path: 'notification',
            element: <Notification />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    element: <CenterLayout />,
    children: [
      {
        path: 'working',
        element: <Working />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
