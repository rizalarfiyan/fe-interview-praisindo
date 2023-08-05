import { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/utils'

interface ActionItem {
  name: string
  icon: LucideIcon
  to: string
}

interface ActionMenuProps {
  className?: string
  actions: ActionItem[]
}

const ActionMenu: React.FC<ActionMenuProps> = (props) => {
  const { actions, className } = props
  const location = useLocation()

  return (
    <nav
      className={cn(
        'mx-auto flex w-full max-w-xl items-center justify-between border-t border-slate-200 bg-white px-2',
        className,
      )}
    >
      {actions.map((val, idx) => {
        const length = actions.length
        const isCenter = length % 2 === 1 && Math.floor(length / 2) === idx
        const icon = <val.icon className='mx-auto h-7 w-7' />
        const isActive = location.pathname === val.to
        return (
          <Link
            to={val.to}
            key={idx}
            className={cn(
              '-mt-0.5 w-full max-w-[94px] border-t-4 border-transparent py-2 text-center text-slate-600 transition-colors duration-200 ease-in-out hover:bg-violet-50',
              isCenter && 'hover:bg-transparent',
              isActive && !isCenter && 'border-violet-700 text-violet-700',
            )}
          >
            {isCenter ? (
              <div className='inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-700 text-white transition-all duration-200 ease-in-out hover:rotate-180 hover:bg-violet-800'>
                {icon}
              </div>
            ) : (
              icon
            )}
            {!isCenter && <span className='text-sm'>{val.name}</span>}
          </Link>
        )
      })}
    </nav>
  )
}

export default ActionMenu
