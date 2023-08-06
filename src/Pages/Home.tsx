import {
  Bell,
  Calculator,
  Clover,
  Component,
  Goal,
  Info,
  LayoutGrid,
  Newspaper,
  PackageSearch,
  Search,
  Sprout,
  Star,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'
import { ScrollArea } from '@/Components/ui/scroll-area'
import UpDownIcon from '@/Components/UpDownIcon'

import { cn, formatCurrency } from '@/utils'

const homeActions = [
  {
    name: 'Model',
    icon: Component,
  },
  {
    name: 'Calculator',
    icon: Calculator,
  },
  {
    name: 'Goal Joutney',
    icon: Goal,
  },
  {
    name: 'Financial Check Up',
    icon: PackageSearch,
  },
  {
    name: 'News',
    icon: Newspaper,
  },
  {
    name: 'Installment Products',
    icon: Sprout,
  },
  {
    name: 'Product Investment',
    icon: Clover,
  },
  {
    name: 'Other',
    icon: LayoutGrid,
  },
]

const investmentTips = [
  'Successful Investment',
  'Choosing a stagble investment product',
  'Investment Tips',
  'Investment Tips',
  'Investment Tips',
  'Investment Tips',
  'Investment Tips',
  'Investment Tips',
]

const Home: React.FC = () => {
  return (
    <>
      <header className='fixed right-0 top-0 z-50 flex w-full items-center'>
        <nav className='mx-auto flex w-full max-w-xl items-center justify-end gap-1 bg-violet-700 px-3 py-2 text-white'>
          <Button variant='fill-primary' className='p-3'>
            <Link to='/working'>
              <Search />
            </Link>
          </Button>
          <Button variant='fill-primary' className='p-3'>
            <Link to='/working'>
              <Star />
            </Link>
          </Button>
          <Button variant='fill-primary' className='relative p-3'>
            <Link to='/user/notification'>
              <Bell />
              <Badge
                variant='destructive'
                size='sm'
                className='absolute right-0 top-0'
              >
                9+
              </Badge>
            </Link>
          </Button>
          <Link to='/user' className='px-2'>
            <Avatar>
              <AvatarImage src='https://www.gravatar.com/avatar/ad777d13435f434d85e77a317d5536d2' />
              <AvatarFallback className='bg-violet-600'>MR</AvatarFallback>
            </Avatar>
          </Link>
        </nav>
      </header>
      <div className='absolute right-0 top-0 z-10 w-full bg-violet-700 pb-40 pt-20 text-white'>
        <div className='container mx-auto flex w-full max-w-xl flex-col'>
          <span className='font-medium'>Total Balance</span>
          <h1 className='text-3xl font-semibold'>
            {formatCurrency(1315800662.31)}
          </h1>
          <div className='mt-2 flex items-center gap-1'>
            <UpDownIcon className='h-5 w-5 text-green-600' isUp />
            <span className='font-medium'>
              {formatCurrency(243489330)} (+14.37%)
            </span>
          </div>
        </div>
      </div>
      <main className='relative z-30 space-y-6 pb-20 pt-52'>
        <div className='flex flex-wrap items-start justify-evenly gap-3 rounded-lg bg-white p-6'>
          {homeActions.map((action) => {
            return (
              <div>
                <Button variant='ghost' className='h-auto w-24 p-3'>
                  <Link to='/working' className='space-y-2'>
                    <action.icon className='mx-auto' />
                    <span className='block leading-tight'>{action.name}</span>
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-semibold'>Investment Tips</h1>
            <Link to='/working' className='font-medium text-violet-700'>
              See More
            </Link>
          </div>

          <div>
            <ScrollArea className='pb-2'>
              <div className='flex w-full whitespace-nowrap'>
                {investmentTips.map((val, idx) => {
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'mb-2 inline-flex w-44 flex-col space-y-2 rounded-lg bg-white p-4 shadow-md',
                        investmentTips.length - 1 !== idx && 'mr-3',
                      )}
                    >
                      <div>
                        <Info className='text-violet-700' />
                      </div>
                      <div className='flex-grow whitespace-normal font-medium'>
                        {val}
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
