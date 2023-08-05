import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/utils'

interface LinkHeader {
  title: string
  to: string
}

interface HeaderSecondaryProps {
  linkHeader: LinkHeader[]
}

const HeaderSecondary: React.FC<HeaderSecondaryProps> = (props) => {
  const { linkHeader } = props
  const location = useLocation()

  return (
    <div className='fixed right-0 top-14 z-50 flex w-full items-center'>
      <div className='mx-auto flex w-full max-w-xl items-center justify-between gap-4 border-b border-slate-200 bg-white px-4'>
        {linkHeader.map((link, idx) => {
          const isActive = location.pathname === link.to
          return (
            <Link
              to={link.to}
              key={idx}
              className={cn(
                'w-full border-b-4 border-transparent py-2.5 text-center text-slate-600 transition-colors duration-300 hover:bg-violet-50',
                isActive && 'border-violet-700 text-violet-700',
              )}
            >
              {link.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderSecondary
