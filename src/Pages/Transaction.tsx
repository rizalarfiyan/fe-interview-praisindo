import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import Header from '@/Components/Header'
import HeaderSecondary from '@/Components/HeaderSecondary'
import { Button } from '@/Components/ui/button'

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
      <main className='flex h-full min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Transaction</h1>
      </main>
    </>
  )
}

export default Transaction
