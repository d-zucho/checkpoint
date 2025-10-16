import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import NavLinks from './NavLinks'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <div className='block md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
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
          <SheetContent className=''>
            <div className='py-5 border-b-1 border-black/10 shadow-sm'>
              <Image
                src='/Logo.png'
                alt='CheckPoint Logo'
                width={200}
                height={100}
                className='mx-auto'
              />
            </div>

            <div className='flex flex-col text-center items-center justify-center'>
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.label}>
                  <Link
                    href={link.href}
                    className='w-fit h-20 black relative overflow-hidden group my-4 font-semibold text-2xl mt-10'
                  >
                    <span>{link.label}</span>
                    <div className='bg-gradient-to-r from-blue-600 to-violet-600 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 rounded-full' />
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
