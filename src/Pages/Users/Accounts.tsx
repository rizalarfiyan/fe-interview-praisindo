import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

import Header from '@/Components/Header'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'

const Accounts: React.FC = () => {
  return (
    <>
      <Header title='Account' hasBack>
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
      <main className='flex h-full min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Account</h1>
      </main>
    </>
  )
}

export default Accounts
