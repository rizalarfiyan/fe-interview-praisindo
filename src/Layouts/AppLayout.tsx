import { ArrowRightLeft, Home, Leaf, PieChart, Plus } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { cn } from '@/utils'

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
  const location = useLocation()

  return (
    <>
      <header className='fixed right-0 top-0 flex w-full items-center'>
        <nav className='mx-auto flex w-full max-w-xl items-center justify-between bg-violet-700 text-white'>
          header
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <div className='fixed bottom-0 right-0 flex w-full items-center'>
        <nav className='mx-auto flex w-full max-w-xl items-center justify-between border-t border-slate-200 bg-white px-2'>
          {actionItems.map((val, idx) => {
            const length = actionItems.length
            const isCenter = length % 2 === 1 && Math.floor(length / 2) === idx
            const icon = <val.icon className='mx-auto h-7 w-7' />
            const isActive = location.pathname === val.to
            return (
              <Link
                to={val.to}
                key={idx}
                className={cn(
                  '-mt-0.5 w-full max-w-[94px] border-t-4 border-transparent py-2 text-center text-slate-600 transition-colors duration-200 ease-in-out hover:bg-violet-50',
                  isCenter && 'hover:bg-transparent',
                  isActive && !isCenter && 'border-violet-700 text-violet-700',
                )}
              >
                {isCenter ? (
                  <div className='inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-700 text-white'>
                    {icon}
                  </div>
                ) : (
                  icon
                )}
                {!isCenter && <span className='text-sm'>{val.name}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default AppLayout
