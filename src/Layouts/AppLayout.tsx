import { ArrowRightLeft, Home, Leaf, PieChart, Plus } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import ActionMenu from '@/Components/ActionMenu'

const actionItems = [
  {
    name: 'Home',
    icon: Home,
    to: '/',
  },
  {
    name: 'Products',
    icon: Leaf,
    to: '/products',
  },
  {
    name: 'Add',
    icon: Plus,
    to: '/working',
  },
  {
    name: 'Transaction',
    icon: ArrowRightLeft,
    to: '/transaction',
  },
  {
    name: 'Portfolio',
    icon: PieChart,
    to: '/portfolio',
  },
]

const AppLayout: React.FC = () => {
  return (
    <>
      <div className='h-full min-h-screen w-full'>
        <Outlet />
      </div>
      <div className='fixed bottom-0 right-0 z-50 flex w-full items-center'>
        <ActionMenu actions={actionItems} />
      </div>
    </>
  )
}

export default AppLayout
