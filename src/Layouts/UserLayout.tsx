import { Outlet } from 'react-router-dom'

const UserLayout: React.FC = () => {
  return (
    <div className='h-full min-h-screen w-full'>
      <Outlet />
    </div>
  )
}

export default UserLayout
