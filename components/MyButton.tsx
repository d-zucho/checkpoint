import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const newButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap' +
    " rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

  {
    variants: {
      variant: {
        default:
          'px-8 py-2 bg-my-primary rounded-md group hover:cursor-pointer active:shadow-none shadow-[inset_-2px_-4px_6px_2px_rgba(0,_0,_0,_0.2)] relative transition-all duration-800',
        outline:
          'border bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        mine: 'bg-my-primary',
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

function MyButton({
  className,
  variant,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof newButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(newButtonVariants({ variant, size, className }))}
      {...props}
    >
      <div
        className={
          'absolute inset-0 rounded-md' +
          ' shadow-[inset_2px_4px_6px_2px_rgba(255,_255,_255,_0.4)] group-active:shadow-none transition-all duration-800'
        }
      ></div>
      {children}
    </Comp>
  )
}

export { MyButton, newButtonVariants }
