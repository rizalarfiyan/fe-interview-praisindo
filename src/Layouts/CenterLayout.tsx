import { Outlet } from 'react-router-dom'

const CenterLayout: React.FC = () => {
  return (
    <div className='container'>
      <main className='flex h-full min-h-screen w-full items-center justify-center'>
        <Outlet />
      </main>
    </div>
  )
}

export default CenterLayout
