import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './routes'

function App() {
  return (
    <Suspense>
      <div className='container max-w-xl overflow-y-auto overflow-x-hidden bg-slate-50'>
        <RouterProvider router={router} />
      </div>
    </Suspense>
  )
}

export default App
