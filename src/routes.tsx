import { createBrowserRouter } from 'react-router-dom'

import Home from '@/Pages/Home'
import Login from '@/Pages/Login'
import NotFound from '@/Pages/NotFound'
import Working from '@/Pages/Working'

import BaseCenter from './Layouts/BaseCenter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    element: <BaseCenter />,
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
