import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import useAuth from '@/stores/auth'

const AuthGuardLayout: React.FC = () => {
  const navigate = useNavigate()
  const [auth] = useAuth((state) => [state.auth], shallow)

  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }
  }, [auth])

  return !auth ? null : <Outlet />
}

export default AuthGuardLayout
