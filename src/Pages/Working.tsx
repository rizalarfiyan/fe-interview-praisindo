import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/Components/ui/button'

const Working: React.FC = () => {
  return (
    <div className='container'>
      <div className='flex h-full min-h-screen w-full items-center justify-center'>
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
            <Link to='/'>Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Working
