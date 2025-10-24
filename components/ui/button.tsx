import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-8 relative",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 text-my-blue-500 font-bold',
        outline2:
          'rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 shadow-[inset_-2px_-2px_4px_0px_rgba(0,_0,_0,_0.2)]!',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        mine: 'px-8 py-2 bg-my-primary hover:bg-my-primary-hover rounded-md group hover:cursor-pointer active:shadow-none shadow-[inset_-2px_-4px_6px_2px_rgba(0,_0,_0,_0.2)] relative transition-all duration-800',
        white:
          'bg-white hover:bg-white/80 font-semibold text-my-primary shadow-[inset_-2px_-2px_4px_0px_rgba(0,_0,_0,_0.2)]! hover:shadow-lg hover:shadow-my-blue-200! border-black/20 hover:border-transparent',
      },

      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {variant === 'mine' && (
        <div
          className={
            'absolute inset-0 rounded-md' +
            ' shadow-[inset_2px_4px_6px_2px_rgba(255,_255,_255,_0.4)] group-active:shadow-none transition-all duration-800'
          }
        />
      )}
      {props.children}
    </Comp>
  )
}

export { Button, buttonVariants }
