import {
  AlertTriangle,
  ArrowDownUp,
  Plus,
  Search,
  SlidersHorizontal,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import ActionFilter from '@/Components/ActionFilter'
import Header from '@/Components/Header'
import { Avatar, AvatarFallback } from '@/Components/ui/avatar'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'
import UpDownIcon from '@/Components/UpDownIcon'

import { cn, formatCurrency } from '@/utils'

const dataAction = [
  {
    title: 'Filter',
    icon: SlidersHorizontal,
  },
  {
    title: 'Sort',
    icon: ArrowDownUp,
  },
]

type PortfolioStatus = 'progress'

interface Portfolio {
  title: string
  description: string
  status: PortfolioStatus
  current_balance: number
  earning: number
  is_up: boolean
  return: number
  is_need_optimization: boolean
}

const dataPortfolio: Portfolio[] = [
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
  {
    title: 'Read To Lombok',
    description: 'Goal',
    status: 'progress',
    current_balance: 80133,
    earning: 204934,
    is_up: true,
    return: 0.25,
    is_need_optimization: true,
  },
]

const getStatusPortfolio = (status: PortfolioStatus) => {
  switch (status) {
    case 'progress':
      return (
        <Badge size='lg' variant='warning'>
          {status}
        </Badge>
      )
  }
}

const Portfolio: React.FC = () => {
  return (
    <>
      <Header title='My Portfolio' isLeft>
        <div className='flex items-center justify-center gap-2'>
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='text-violet-800 hover:text-violet-800'
          >
            <Link to='/working'>
              <Search />
            </Link>
          </Button>
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='text-violet-800 hover:text-violet-800'
          >
            <Link to='/working'>
              <Plus />
            </Link>
          </Button>
        </div>
      </Header>
      <main className='space-y-4 pb-28 pt-32'>
        <ActionFilter action={dataAction} />
        <div className='flex flex-col items-center gap-4'>
          {dataPortfolio.map((val, idx) => {
            const status = getStatusPortfolio(val.status)
            return (
              <div
                key={idx}
                className='w-full space-y-4 rounded-md bg-white p-6 shadow-md'
              >
                <div className='flex items-center gap-6'>
                  <Avatar className='h-16 w-16 rounded-xl'>
                    <AvatarFallback className='rounded bg-slate-100 text-base font-semibold text-slate-300'>
                      LOGO
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-grow flex-col'>
                    <h2 className='text-lg font-semibold'>{val.title}</h2>
                    <p className='text-sm text-slate-400'>{val.description}</p>
                  </div>
                  {status}
                </div>
                <hr className='h-px border-0 bg-slate-200' />
                <div>
                  <h3 className='text-sm text-slate-500'>Current Balance</h3>
                  <span className='font-semibold'>
                    {formatCurrency(val.current_balance)}
                  </span>
                </div>
                <div className='flex items-center justify-between gap-3'>
                  <div className='text-left'>
                    <h3 className='text-sm text-slate-500'>Earnings.</h3>
                    <span className='font-semibold'>
                      {formatCurrency(val.earning)}
                    </span>
                  </div>
                  <div className='text-right'>
                    <h3 className='text-sm text-slate-500'>Return</h3>
                    <div
                      className={cn(
                        'flex items-center justify-end gap-1',
                        val.is_up ? 'text-green-500' : 'text-red-500',
                      )}
                    >
                      <UpDownIcon className='h-5 w-5' isUp={val.is_up} />
                      <span className='font-medium'>{val.return}%</span>
                    </div>
                  </div>
                </div>
                {val.is_need_optimization && (
                  <div className='inline-flex items-center gap-2 rounded-full bg-slate-100 pr-4'>
                    <div className='rounded-full bg-red-500 p-1.5 text-white'>
                      <AlertTriangle width={20} height={20} />
                    </div>
                    <span className='text-sm'>Need Optimization</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Portfolio
