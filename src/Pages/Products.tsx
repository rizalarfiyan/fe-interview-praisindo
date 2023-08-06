import {
  ArrowDownUp,
  Layers,
  Search,
  SlidersHorizontal,
  Star,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import ActionFilter from '@/Components/ActionFilter'
import Header from '@/Components/Header'
import HeaderSecondary from '@/Components/HeaderSecondary'
import { Avatar, AvatarFallback } from '@/Components/ui/avatar'
import { Button } from '@/Components/ui/button'
import UpDownIcon from '@/Components/UpDownIcon'

import { cn, formatCurrency } from '@/utils'

const linkHeader = [
  {
    title: 'Mutual Funds',
    to: '/products',
  },
  {
    title: 'Bonds',
    to: '/products/bonds',
  },
  {
    title: 'Stocks',
    to: '/products/stocks',
  },
]

const dataAction = [
  {
    title: 'Filter',
    icon: SlidersHorizontal,
  },
  {
    title: 'Sort',
    icon: ArrowDownUp,
  },
  {
    title: 'Compare',
    icon: Layers,
  },
]

interface ProductItems {
  title: string
  rating: number
  type: string
  risk_tolerance: string
  minimum_investment: number
  price: number
  is_up: boolean
  percentage: number
}

const dataProducts: ProductItems[] = [
  {
    title: 'Bahana Dana Likuid',
    rating: 4.5,
    type: 'Money Market',
    risk_tolerance: 'Conservative',
    minimum_investment: 1000000,
    price: 2326323.0,
    is_up: true,
    percentage: 0.5,
  },
  {
    title: 'Bahana Dana Likuid',
    rating: 4.5,
    type: 'Money Market',
    risk_tolerance: 'Conservative',
    minimum_investment: 1000000,
    price: 23626323.0,
    is_up: true,
    percentage: 0.5,
  },
  {
    title: 'Bahana Dana Likuid',
    rating: 4.5,
    type: 'Money Market',
    risk_tolerance: 'Conservative',
    minimum_investment: 1000000,
    price: 23626323.0,
    is_up: true,
    percentage: 0.5,
  },
  {
    title: 'Bahana Dana Likuid',
    rating: 4.5,
    type: 'Money Market',
    risk_tolerance: 'Conservative',
    minimum_investment: 1000000,
    price: 23626323.0,
    is_up: true,
    percentage: 0.5,
  },
  {
    title: 'Bahana Dana Likuid',
    rating: 4.5,
    type: 'Money Market',
    risk_tolerance: 'Conservative',
    minimum_investment: 1000000,
    price: 23626323.0,
    is_up: true,
    percentage: 0.5,
  },
  {
    title: 'Bahana Dana Likuid',
    rating: 4.5,
    type: 'Money Market',
    risk_tolerance: 'Conservative',
    minimum_investment: 1000000,
    price: 23626323.0,
    is_up: true,
    percentage: 0.5,
  },
]

const Products: React.FC = () => {
  return (
    <>
      <Header title='Product'>
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
      </Header>
      <HeaderSecondary linkHeader={linkHeader} />
      <main className='space-y-4 pb-28 pt-32'>
        <ActionFilter action={dataAction} />
        <div className='flex flex-col items-center gap-4'>
          {dataProducts.map((val, idx) => {
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
                  <div>
                    <div className='flex items-center gap-2 text-slate-500'>
                      <div className='flex items-center gap-1.5'>
                        <Star
                          className='text-yellow-500'
                          width={16}
                          height={16}
                        />
                        <span>4.5</span>
                      </div>
                      <span className='h-1.5 w-1.5 rounded-full bg-slate-400' />
                      <div>{val.type}</div>
                      <span className='h-1.5 w-1.5 rounded-full bg-slate-400' />
                      <div>{val.risk_tolerance}</div>
                    </div>
                    <h2 className='text-lg font-semibold'>{val.title}</h2>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-3'>
                  <div className='text-left'>
                    <h3 className='text-sm text-slate-500'>Min. Purchase</h3>
                    <span className='font-semibold'>
                      {formatCurrency(val.minimum_investment, true)}
                    </span>
                  </div>
                  <div className='text-center'>
                    <h3 className='text-sm text-slate-500'>Price</h3>
                    <span className='font-semibold'>
                      {formatCurrency(val.price)}
                    </span>
                  </div>
                  <div className='text-right'>
                    <h3 className='text-sm text-slate-500'>Exp. Return 1Y</h3>
                    <div
                      className={cn(
                        'flex items-center justify-end gap-1',
                        val.is_up ? 'text-green-500' : 'text-red-500',
                      )}
                    >
                      <UpDownIcon className='h-5 w-5' isUp={val.is_up} />
                      <span className='font-medium'>{val.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Products
