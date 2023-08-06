import { ChevronDown, LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/utils'

import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

interface ActionFilterItem {
  title: string
  icon?: LucideIcon
}

interface ActionFilterProps {
  action: ActionFilterItem[]
  defaultIcon?: boolean
}

const ActionFilter: React.FC<ActionFilterProps> = (props) => {
  const { action, defaultIcon } = props

  return (
    <ScrollArea className='pb-4'>
      <div className='flex w-full whitespace-nowrap p-1'>
        {action.map((data, idx) => {
          return (
            <Button
              key={idx}
              asChild
              variant='outline'
              className='rounded-full px-5 text-violet-800 hover:text-violet-800'
            >
              <Link
                to='/working'
                className={cn(
                  'flex items-center justify-center gap-2',
                  action.length - 1 !== idx && 'mr-3',
                )}
              >
                {data?.icon && <data.icon width={16} height={16} />}
                <span>{data.title}</span>
                {!data?.icon && defaultIcon && (
                  <ChevronDown width={16} height={16} />
                )}
              </Link>
            </Button>
          )
        })}
      </div>
    </ScrollArea>
  )
}

export default ActionFilter
