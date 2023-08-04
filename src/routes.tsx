import { createBrowserRouter } from 'react-router-dom'

import Home from '@/Pages/Home'
import NotFound from '@/Pages/NotFound'
import Working from '@/Pages/Working'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'working',
    element: <Working />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
