import { Outlet } from 'react-router-dom'

const BaseCenter: React.FC = () => {
  return (
    <div className='container'>
      <div className='flex h-full min-h-screen w-full items-center justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default BaseCenter
