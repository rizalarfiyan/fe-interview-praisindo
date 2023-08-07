import { AvatarImage } from '@radix-ui/react-avatar'
import { Bell, Camera, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import Header from '@/Components/Header'
import { Avatar, AvatarFallback } from '@/Components/ui/avatar'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'
import { Switch } from '@/Components/ui/switch'

import useAuth from '@/stores/auth'

interface AccountAction {
  title: string
  to?: string
  children?: AccountAction[]
}

const accountActions: AccountAction[] = [
  {
    title: 'General',
    children: [
      {
        title: 'Account Settings',
        to: '/working',
      },
      {
        title: 'Risk Provile Level',
        to: '/working',
      },
      {
        title: 'Investment Account No.',
        to: '/working',
      },
      {
        title: 'Reveral ID',
        to: '/working',
      },
      {
        title: 'Logout',
      },
    ],
  },
  {
    title: 'Customize App',
    children: [
      {
        title: 'Advance Settings',
        to: '/working',
      },
      {
        title: 'Dark Mode',
      },
      {
        title: 'Sign in with PIN Code',
      },
      {
        title: 'Sign in with Finger Print',
      },
    ],
  },
]

const AccountActionSwitch: React.FC<{
  action: AccountAction
}> = ({ action: data }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='flex items-center justify-between px-4 py-3 transition-colors duration-300 hover:bg-slate-100'>
      <span>{data.title}</span>
      <Switch
        checked={isActive}
        onCheckedChange={() => setIsActive((prev) => !prev)}
      />
    </div>
  )
}

const Accounts: React.FC = () => {
  const navigate = useNavigate()
  const [logout] = useAuth((state) => [state.logout], shallow)

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    logout()
    navigate('/login')
  }

  return (
    <>
      <Header title='Account' hasBack hasBorder>
        <Button
          asChild
          variant='ghost'
          size='icon'
          className='relative p-1 text-violet-800 hover:text-violet-800'
        >
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
      </Header>
      <main className='pb-10 pt-24'>
        <Link
          to='/working'
          className='relative mx-auto block h-28 w-28 rounded-full border-[6px] border-white shadow-lg'
        >
          <Avatar className='h-full w-full'>
            <AvatarImage src='https://www.gravatar.com/avatar/ad777d13435f434d85e77a317d5536d2' />
            <AvatarFallback className='bg-white text-3xl font-bold text-slate-700'>
              MR
            </AvatarFallback>
          </Avatar>
          <div className='absolute bottom-0 right-0 rounded-full bg-violet-600 p-1.5 text-white'>
            <Camera width={20} height={20} />
          </div>
        </Link>
        <div className='space-y-6'>
          {accountActions.map((val, idx) => {
            return (
              <div className='space-y-2' key={idx}>
                <h3 className='font-semibold text-slate-400'>{val.title}</h3>
                <div className='divide-y rounded-md bg-white shadow-md'>
                  {val?.children?.map((child, idxChild) => {
                    if (child?.to) {
                      return (
                        <Link
                          key={idxChild}
                          to={child.to ?? '/working'}
                          className='flex items-center justify-between px-4 py-3 transition-colors duration-300 hover:bg-slate-100'
                        >
                          <span>{child.title}</span>
                          <ChevronRight />
                        </Link>
                      )
                    }

                    if (child.title.toLocaleLowerCase() === 'logout') {
                      return (
                        <button
                          key={idxChild}
                          onClick={handleLogout}
                          className='flex w-full items-center justify-between px-4 py-3 transition-colors duration-300 hover:bg-slate-100'
                        >
                          <span>{child.title}</span>
                        </button>
                      )
                    }

                    return <AccountActionSwitch key={idxChild} action={child} />
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Accounts
