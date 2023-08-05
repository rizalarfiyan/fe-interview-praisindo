import { Bell, Search, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'

const Home: React.FC = () => {
  return (
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
  )
}

export default Home
