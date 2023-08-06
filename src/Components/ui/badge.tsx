import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-800',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80',
        secondary:
          'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        destructive:
          'border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/80',
        outline: 'text-slate-950 dark:text-slate-50',
        primary:
          'border-transparent bg-violet-500 text-slate-50 hover:bg-violet-500/80 dark:bg-violet-900 dark:text-violet-50 dark:hover:bg-violet-900/80',
        success:
          'border-transparent bg-green-50 text-green-600 hover:bg-green-200 dark:bg-green-900 dark:text-green-50 dark:hover:bg-green-900/80',
        danger:
          'border-transparent bg-red-50 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/80',
        info: 'border-transparent bg-blue-50 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-50 dark:hover:bg-blue-900/80',
        warning:
          'border-transparent bg-yellow-50 text-yellow-600 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-50 dark:hover:bg-yellow-900/80',
      },
      size: {
        default: '',
        sm: 'py-0 px-1.5',
        lg: 'py-1 px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
