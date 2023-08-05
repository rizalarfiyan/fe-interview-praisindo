import { BellOff } from 'lucide-react'
import { Link } from 'react-router-dom'

import Header from '@/Components/Header'
import { Button } from '@/Components/ui/button'

const Notification: React.FC = () => {
  return (
    <>
      <Header title='Notification' hasBack>
        <Button
          asChild
          variant='ghost'
          size='icon'
          className='text-violet-800 hover:text-violet-800'
        >
          <Link to='/working'>
            <BellOff />
          </Link>
        </Button>
      </Header>
      <main className='flex h-full min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Notification</h1>
      </main>
    </>
  )
}

export default Notification
