import { Bell, Search, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'
import UpDownIcon from '@/Components/UpDownIcon'

import { formatCurrency } from '@/utils'

const Home: React.FC = () => {
  return (
    <>
      <header className='fixed right-0 top-0 z-50 flex w-full items-center'>
        <nav className='mx-auto flex w-full max-w-xl items-center justify-end gap-1 bg-violet-700 px-3 py-2 text-white'>
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
      <div className='absolute right-0 top-0 w-full bg-violet-700 pb-40 pt-20 text-white'>
        <div className='container mx-auto flex w-full max-w-xl flex-col'>
          <span className='font-medium'>Total Balance</span>
          <h1 className='text-3xl font-semibold'>
            {formatCurrency(1315800662.31)}
          </h1>
          <div className='mt-2 flex items-center gap-1'>
            <UpDownIcon className='h-5 w-5 text-green-600' isUp />
            <span className='font-medium'>
              {formatCurrency(243489330)} (+14.37%)
            </span>
          </div>
        </div>
      </div>
      <main className='pb-20'></main>
    </>
  )
}

export default Home
