import { ArrowDownUp, Layers, Search, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

import ActionFilter from '@/Components/ActionFilter'
import Header from '@/Components/Header'
import HeaderSecondary from '@/Components/HeaderSecondary'
import { Button } from '@/Components/ui/button'

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
      <main className='pt-32'>
        <ActionFilter action={dataAction} />
      </main>
    </>
  )
}

export default Products
