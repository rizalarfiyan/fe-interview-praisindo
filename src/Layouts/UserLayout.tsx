import { Outlet } from 'react-router-dom'

const UserLayout: React.FC = () => {
  return (
    <div className='container'>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
