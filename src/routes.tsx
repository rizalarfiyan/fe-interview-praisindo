import { createBrowserRouter } from 'react-router-dom'

import AppLayout from '@/Layouts/AppLayout'
import CenterLayout from '@/Layouts/CenterLayout'

import Home from '@/Pages/Home'
import Login from '@/Pages/Login'
import NotFound from '@/Pages/NotFound'
import Working from '@/Pages/Working'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
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
