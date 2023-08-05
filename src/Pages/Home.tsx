import { Link } from 'react-router-dom'

import { Button } from '@/Components/ui/button'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <div className='flex h-full min-h-screen w-full items-center justify-center'>
        <div className='inline-flex flex-col gap-4'>
          <h1 className='text-4xl font-semibold'>Hello Rizal!</h1>
          <Button asChild variant='destructive' className='mx-auto'>
            <Link to='/login'>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
