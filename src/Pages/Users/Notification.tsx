import {
  ArrowDown,
  ArrowRight,
  BellOff,
  ChevronRight,
  KeyRound,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Header from '@/Components/Header'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'

import { cn, formatDate } from '@/utils'
import isUndefined from '@/utils/types'

type NotificationType =
  | 'password_changed'
  | 'money_sent'
  | 'payment_received'
  | 'new_message'

interface NotificationItem {
  type: NotificationType
  datetime: string
  message: string
  count?: number
  isNew?: boolean
}

const notificationsData: NotificationItem[] = [
  {
    type: 'payment_received',
    message: 'You received $100 from John Doe',
    datetime: '2021-08-01T12:00:00Z',
    isNew: true,
    count: 0,
  },
  {
    type: 'money_sent',
    message: 'You sent $100 to John Doe',
    datetime: '2021-08-01T12:00:00Z',
    isNew: true,
    count: 3,
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'payment_received',
    message: 'You received $100 from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'money_sent',
    message: 'You sent $100 to John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'payment_received',
    message: 'You received $100 from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'money_sent',
    message: 'You sent $100 to John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'payment_received',
    message: 'You received $100 from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'money_sent',
    message: 'You sent $100 to John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'payment_received',
    message: 'You received $100 from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'money_sent',
    message: 'You sent $100 to John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'payment_received',
    message: 'You received $100 from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'money_sent',
    message: 'You sent $100 to John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'password_changed',
    message: 'Your password has been changed',
    datetime: '2021-08-01T12:00:00Z',
  },
  {
    type: 'new_message',
    message: 'You have a new message from John Doe',
    datetime: '2021-08-01T12:00:00Z',
  },
]

const getStatusByType = (type: NotificationType) => {
  switch (type) {
    case 'payment_received':
      return {
        title: 'Payment Received',
        icon: (
          <div className='rounded-full bg-violet-700 p-2 text-white'>
            <ArrowDown />
          </div>
        ),
      }
    case 'money_sent':
      return {
        title: 'Money has been sent',
        icon: (
          <div className='rounded-full bg-green-700 p-2 text-white'>
            <ArrowRight />
          </div>
        ),
      }
    case 'password_changed':
      return {
        title: 'Password changed',
        icon: (
          <div className='rounded-full bg-red-500 p-2 text-white'>
            <KeyRound />
          </div>
        ),
      }
    case 'new_message':
      return {
        title: 'New messages',
        icon: (
          <div className='rounded-full bg-yellow-500 p-2 text-white'>
            <MessageCircle />
          </div>
        ),
      }
  }
}

const Notification: React.FC = () => {
  return (
    <>
      <Header title='Notification' hasBack hasBorder>
        <Button
          asChild
          variant='ghost'
          size='icon'
          className='text-violet-800 hover:text-violet-800'
        >
          <Link to='/working'>
            <BellOff />
          </Link>
        </Button>
      </Header>
      <main className='mt-16'>
        <div className='mb-6 flex flex-col gap-2'>
          {notificationsData.map((val, idx) => {
            const status = getStatusByType(val.type)
            return (
              <>
                <Link
                  to='/working'
                  key={idx}
                  className={cn(
                    'flex w-full items-center gap-4 rounded-md px-4 py-2 transition-colors duration-300 hover:bg-slate-100',
                    val.isNew && 'bg-slate-100',
                  )}
                >
                  {status.icon}
                  <div className='flex flex-grow flex-col'>
                    <h2 className='text-lg font-semibold'>{status.title}</h2>
                    <p className='text-slate-500'>{val.message}</p>
                    <span className='text-sm text-slate-400'>
                      {formatDate(val.datetime)}
                    </span>
                  </div>
                  <div className='flex items-center'>
                    {!isUndefined(val?.count) ? (
                      val?.count === 0 ? (
                        <span className='h-4 w-4 rounded-full bg-violet-500' />
                      ) : (
                        <Badge variant='primary'>{val.count}</Badge>
                      )
                    ) : null}
                    <ChevronRight />
                  </div>
                </Link>
                {notificationsData.length - 1 !== idx && (
                  <hr className='h-px border-0 bg-slate-200' />
                )}
              </>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Notification
