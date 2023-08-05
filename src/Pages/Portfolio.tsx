import { Plus, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import Header from '@/Components/Header'
import { Button } from '@/Components/ui/button'

const Portfolio: React.FC = () => {
  return (
    <>
      <Header title='My Portfolio' isLeft>
        <div className='flex items-center justify-center gap-2'>
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='text-violet-800 hover:text-violet-800'
          >
            <Link to='/working'>
              <Search />
            </Link>
          </Button>
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='text-violet-800 hover:text-violet-800'
          >
            <Link to='/working'>
              <Plus />
            </Link>
          </Button>
        </div>
      </Header>
      <main className='flex h-full min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Portfolio</h1>
      </main>
    </>
  )
}

export default Portfolio
