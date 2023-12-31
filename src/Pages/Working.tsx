import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import { Button } from '@/Components/ui/button'

import useAuth from '@/stores/auth'

const Working: React.FC = () => {
  const [isAuthenticated] = useAuth((state) => [state.isAuthenticated], shallow)

  return (
    <div className='space-y-6 text-center'>
      <CheckCircle2
        size={32}
        strokeWidth={3}
        absoluteStrokeWidth
        className='mx-auto h-20 w-20 text-green-700'
      />
      <div className='max-w-xs space-y-2'>
        <h1 className='text-2xl font-bold'>This button is working</h1>
        <p className='text-slate-500'>
          Thank you, your transaction has been sent and we will process it
          immediately.
        </p>
      </div>
      <Button asChild variant='outline' className='w-full max-w-sm'>
        <Link to={isAuthenticated() ? '/' : '/login'}>Back to Home</Link>
      </Button>
    </div>
  )
}

export default Working
