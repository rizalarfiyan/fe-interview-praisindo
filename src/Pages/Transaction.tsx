import { ArrowDown, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import ActionFilter from '@/Components/ActionFilter'
import Header from '@/Components/Header'
import HeaderSecondary from '@/Components/HeaderSecondary'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'

import { formatCurrency, formatDate } from '@/utils'

const linkHeader = [
  {
    title: 'Mutual Funds',
    to: '/transaction',
  },
  {
    title: 'Bonds',
    to: '/transaction/bonds',
  },
  {
    title: 'Stocks',
    to: '/transaction/stocks',
  },
]

const dataAction = [
  {
    title: 'All Transaction',
  },
  {
    title: 'All Status',
  },
  {
    title: 'All Pending',
  },
]

type TransactionType = 'subscription'

type TransactionStatus = 'submitted' | 'process' | 'done' | 'failed'

interface Transaction {
  type: TransactionType
  datetime: string
  status: TransactionStatus
  title: string
  description: string
  amount: number
  price: number
  total: number
}

const dataTransaction: Transaction[] = [
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
  {
    type: 'subscription',
    datetime: '2021-08-01T12:00:00Z',
    status: 'submitted',
    title: 'Subscription 1',
    description: 'Subscription 1 description',
    amount: 293912,
    price: 12987,
    total: 100,
  },
]

const getTypeTransaction = (type: TransactionType) => {
  switch (type) {
    case 'subscription':
      return {
        title: 'Subscription',
        icon: (
          <div className='rounded-full bg-green-700 p-2 text-white'>
            <ArrowDown />
          </div>
        ),
      }
  }
}

const getStatusTransaction = (status: TransactionStatus) => {
  switch (status) {
    case 'submitted':
      return (
        <Badge size='lg' variant='info'>
          {status}
        </Badge>
      )
    case 'process':
      return (
        <Badge size='lg' variant='warning'>
          {status}
        </Badge>
      )
    case 'done':
      return (
        <Badge size='lg' variant='success'>
          {status}
        </Badge>
      )
    case 'failed':
      return (
        <Badge size='lg' variant='danger'>
          {status}
        </Badge>
      )
  }
}

const Transaction: React.FC = () => {
  return (
    <>
      <Header title='Transaction'>
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
          {dataTransaction.map((val, idx) => {
            const type = getTypeTransaction(val.type)
            const status = getStatusTransaction(val.status)
            return (
              <Link
                key={idx}
                to='/working'
                className='w-full space-y-4 rounded-md border-2 border-transparent bg-white p-6 shadow-md transition-colors duration-300 hover:border-violet-600'
              >
                <div className='flex w-full items-center gap-5'>
                  {type.icon}
                  <div className='flex flex-grow flex-col'>
                    <h2 className='font-semibold'>{type.title}</h2>
                    <span className='text-sm text-slate-400'>
                      {formatDate(val.datetime)}
                    </span>
                  </div>
                  {status}
                </div>
                <hr className='h-px border-0 bg-slate-200' />
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold'>{val.title}</h3>
                    <p className='text-sm text-slate-400'>{val.description}</p>
                  </div>
                  <div className='flex items-center justify-between gap-3'>
                    <div className='text-left'>
                      <h3 className='text-sm text-slate-500'>Amount (IDR)</h3>
                      <span className='font-semibold'>
                        {val.amount === 0
                          ? '-'
                          : formatCurrency(val.amount, false, '')}
                      </span>
                    </div>
                    <div className='text-center'>
                      <h3 className='text-sm text-slate-500'>Price</h3>
                      <span className='font-semibold'>
                        {val.price === 0
                          ? '-'
                          : formatCurrency(val.price, false, '')}
                      </span>
                    </div>
                    <div className='text-right'>
                      <h3 className='text-sm text-slate-500'>Total (unit)</h3>
                      <span className='font-semibold'>{val.total}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Transaction
