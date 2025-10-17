import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { LogIn, Menu } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import NavLinks from './NavLinks'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Button, buttonVariants } from '../ui/button'

const MobileNav = () => {
  return (
    <div className='block md:hidden'>
      <Sheet>
        <SheetTrigger asChild className='hover:cursor-pointer'>
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent>
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle>
                <p>CheckPoint</p>
              </SheetTitle>
              <SheetDescription>Get to the truth in politics</SheetDescription>
            </SheetHeader>
          </VisuallyHidden>

          <div className='py-5 border-b-1 border-black/10 shadow-sm'>
            <SheetClose asChild>
              <Link href='/'>
                <Image
                  src='/Logo.png'
                  alt='CheckPoint Logo'
                  width={200}
                  height={100}
                  className='mx-auto'
                />
              </Link>
            </SheetClose>
          </div>

          <div className='flex flex-col text-center items-center justify-center'>
            {NAV_LINKS.map((link) => (
              <SheetClose asChild key={link.label}>
                <Link
                  href={link.href}
                  className='w-fit h-20 black relative overflow-hidden group my-4 font-semibold text-2xl mt-10'
                >
                  <span>{link.label}</span>
                  <div className='bg-gradient-to-r from-blue-600 to-violet-600 h-[2.5px] w-0 group-hover:w-full transition-al duration-500 rounded-full' />
                </Link>
              </SheetClose>
            ))}
          </div>
          <SheetFooter className='mb-20'>
            <div className='flex flex-col items-center gap-4'>
              <SheetClose asChild>
                <Link
                  href={'/'}
                  className={`${buttonVariants({
                    variant: 'outline',
                  })} transition-all duration-300 w-3/4 text-link border-my-blue-500 border-2 hover:shadow-md hover:shadow-my-blue-200 hover:bg-my-blue-500/20 hover:text-link hover:border-transparent text-base!`}
                >
                  Login
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant={'mine'}
                  className='text-white w-3/4 hover:shadow-md transition-all duration-300 text-base'
                >
                  <div className='absolute inset-0 rounded-md hover:shadow-md hover:shadow-my-blue-200 transition-all duration-300 z-0' />
                  Sign Up
                  <LogIn />
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
