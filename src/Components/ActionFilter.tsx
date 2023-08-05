import { ChevronDown, LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

interface ActionFilterItem {
  title: string
  icon?: LucideIcon
}

interface ActionFilterProps {
  action: ActionFilterItem[]
}

const ActionFilter: React.FC<ActionFilterProps> = (props) => {
  const { action } = props

  return (
    <ScrollArea className='h-14 space-x-4 whitespace-nowrap'>
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
              className='mr-4 flex items-center justify-center gap-2'
            >
              {data?.icon && <data.icon width={16} height={16} />}
              <span>{data.title}</span>
              {!data?.icon && <ChevronDown width={16} height={16} />}
            </Link>
          </Button>
        )
      })}
    </ScrollArea>
  )
}

export default ActionFilter
