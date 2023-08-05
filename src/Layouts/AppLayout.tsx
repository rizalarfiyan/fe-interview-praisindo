import { AvatarImage } from '@radix-ui/react-avatar'
import {
  ArrowRightLeft,
  Bell,
  Home,
  Leaf,
  PieChart,
  Plus,
  Search,
  Star,
} from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Avatar, AvatarFallback } from '@/Components/ui/avatar'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'

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
        <nav className='mx-auto flex w-full max-w-xl items-center justify-end gap-1 bg-violet-700 px-3 py-1 text-white'>
          <Button variant='fill-primary' className='p-3'>
            <Link to='/working'>
              <Search />
            </Link>
          </Button>
          <Button variant='fill-primary' className='p-3'>
            <Link to='/working'>
              <Star />
            </Link>
          </Button>
          <Button variant='fill-primary' className='relative p-3'>
            <Link to='/user/notification'>
              <Bell />
              <Badge
                variant='destructive'
                size='sm'
                className='absolute right-0 top-0'
              >
                9+
              </Badge>
            </Link>
          </Button>
          <Link to='/user' className='px-2'>
            <Avatar>
              <AvatarImage src='https://www.gravatar.com/avatar/ad777d13435f434d85e77a317d5536d2' />
              <AvatarFallback className='bg-violet-600'>MR</AvatarFallback>
            </Avatar>
          </Link>
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
                  <div className='inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-700 text-white transition-all duration-200 ease-in-out hover:rotate-180 hover:bg-violet-800'>
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
