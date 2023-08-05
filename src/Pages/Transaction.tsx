import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import ActionFilter from '@/Components/ActionFilter'
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
      <main className='pt-32'>
        <ActionFilter action={dataAction} />
      </main>
    </>
  )
}

export default Transaction
