import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { cn } from '@/utils'

import { Button } from './ui/button'

interface HeaderProps {
  title: string
  hasBack?: boolean
  children: React.ReactNode
  isLeft?: boolean
  hasBorder?: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, hasBack, children, isLeft, hasBorder } = props
  const navigation = useNavigate()
  const goBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault()
    navigation(-1)
  }

  return (
    <div className='fixed right-0 top-0 z-50 flex w-full items-center'>
      <div
        className={cn(
          'mx-auto flex w-full max-w-xl items-center justify-between bg-white px-4 py-2',
          hasBorder && 'border-b border-slate-200',
        )}
      >
        {isLeft ? (
          ''
        ) : hasBack ? (
          <Button
            variant='ghost'
            size='icon'
            className='text-violet-800 hover:text-violet-800'
            onClick={goBack}
          >
            <ChevronLeft />
          </Button>
        ) : (
          <div />
        )}
        <h1 className='text-2xl font-semibold'>{title}</h1>
        {children ? children : <div />}
      </div>
    </div>
  )
}

export default Header
