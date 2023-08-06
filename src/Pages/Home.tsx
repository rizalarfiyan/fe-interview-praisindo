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

const latestNews = [
  {
    title: 'Blockchain Innovations Gain Traction in Global Payment Networks',
    image: 'https://picsum.photos/300/300?random=1',
  },
  {
    title:
      'Robo-Advisors Surge as Investors Embrace AI-driven Financial Guidance',
    image: 'https://picsum.photos/300/300?random=2',
  },
  {
    title:
      'Central Bank Digital Currencies (CBDCs) Spark Debate on Future of Money',
    image: 'https://picsum.photos/300/300?random=3',
  },
  {
    title:
      'Fintech Startups Raise Record Funding in Q3 2023 Amidst Regulatory Changes',
    image: 'https://picsum.photos/300/300?random=4',
  },
  {
    title:
      'Cryptocurrency Regulations Tighten, Impacting Market Sentiment and Trading Volumes',
    image: 'https://picsum.photos/300/300?random=5',
  },
  {
    title:
      'Open Banking Revolution Continues: New API Standards Set for Secure Data Sharing',
    image: 'https://picsum.photos/300/300?random=6',
  },
  {
    title:
      'Artificial Intelligence Reshapes Customer Service in Banking: Chatbots and Beyond',
    image: 'https://picsum.photos/300/300?random=7',
  },
  {
    title:
      'Biometric Authentication Trends: Fingerprint and Facial Recognition Transform Payments',
    image: 'https://picsum.photos/300/300?random=8',
  },
]

const Home: React.FC = () => {
  return (
    <>
      <header className='fixed right-0 top-0 z-50 flex w-full items-center'>
        <nav className='mx-auto flex w-full max-w-xl items-center justify-end gap-1 bg-violet-700 px-3 py-2 text-white'>
          <Button asChild variant='fill-primary' className='p-3'>
            <Link to='/working'>
              <Search />
            </Link>
          </Button>
          <Button asChild variant='fill-primary' className='p-3'>
            <Link to='/working'>
              <Star />
            </Link>
          </Button>
          <Button asChild variant='fill-primary' className='relative p-3'>
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
      <main className='relative z-30 space-y-6 pb-24 pt-52'>
        <div className='flex flex-wrap items-start justify-evenly gap-3 rounded-lg bg-white p-6 shadow-lg'>
          {homeActions.map((action, idx) => {
            return (
              <Button
                key={idx}
                asChild
                variant='ghost'
                className='h-auto w-24 p-3'
              >
                <Link to='/working'>
                  <div className='space-y-2 text-center'>
                    <action.icon className='mx-auto' />
                    <span className='block leading-tight'>{action.name}</span>
                  </div>
                </Link>
              </Button>
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
              <div className='flex w-full whitespace-nowrap p-1'>
                {investmentTips.map((val, idx) => {
                  return (
                    <Link
                      to='/working'
                      key={idx}
                      className={cn(
                        'mb-2 inline-flex w-44 flex-col space-y-2 rounded-lg border border-transparent bg-white p-4 shadow-md transition-all duration-300 hover:border-violet-600',
                        investmentTips.length - 1 !== idx && 'mr-3',
                      )}
                    >
                      <Info className='text-violet-700' />
                      <div className='flex-grow whitespace-normal font-medium'>
                        {val}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-semibold'>Latest News</h1>
            <Link to='/working' className='font-medium text-violet-700'>
              See More
            </Link>
          </div>
          <div>
            <ScrollArea className='pb-2'>
              <div className='flex w-full whitespace-nowrap p-1'>
                {latestNews.map((val, idx) => {
                  return (
                    <Link
                      to='/working'
                      key={idx}
                      className={cn(
                        'group mb-2 inline-flex w-44 flex-col space-y-2 overflow-hidden rounded-lg bg-white shadow-md',
                        latestNews.length - 1 !== idx && 'mr-3',
                      )}
                    >
                      <div className='aspect-[4/3] overflow-hidden object-cover'>
                        <img
                          className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                          src={val.image}
                          alt={val.title}
                        />
                      </div>
                      <div className='flex-grow whitespace-normal px-3 pb-3 font-medium transition-colors duration-200 group-hover:bg-slate-50'>
                        <span className='line-clamp-3'>{val.title}</span>
                      </div>
                    </Link>
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
