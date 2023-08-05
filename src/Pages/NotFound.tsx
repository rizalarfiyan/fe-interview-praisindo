import { Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/Components/ui/button'

const NotFound: React.FC = () => {
  return (
    <div className='space-y-6 text-center'>
      <Compass
        size={32}
        strokeWidth={3}
        absoluteStrokeWidth
        className='mx-auto h-20 w-20 animate-compass text-red-700'
      />
      <div className='max-w-sm space-y-2'>
        <h1 className='text-2xl font-bold'>Page Not Found</h1>
        <p className='text-slate-500'>
          While we navigate the route, you can explore our latest financial
          insights on our homepage.
        </p>
      </div>
      <Button asChild variant='outline' className='w-full max-w-sm'>
        <Link to='/'>Back to Home</Link>
      </Button>
    </div>
  )
}

export default NotFound
