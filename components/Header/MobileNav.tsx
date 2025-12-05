import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { Button } from '../ui/button'

const MobileNav = () => {
  return (
    <div className='block'>
      <Sheet>
        <SheetTrigger asChild className=''>
          <Menu className='size-7 text-gray-600 hover:text-gray-800 hover:cursor-pointer transition-colors duration-300' />
        </SheetTrigger>
        <SheetHeader className='sr-only'>
          <SheetTitle className=''>CheckPoint</SheetTitle>
        </SheetHeader>
        <SheetContent className='p-4 max-w-sm'>
          <SheetClose asChild>
            <Link href={'/'}>
              <Image
                src={'/logo.svg'}
                alt={'logo'}
                width={160}
                height={30}
                className='mb-4 mx-auto'
              />
            </Link>
          </SheetClose>
          <nav className='flex flex-col gap-8 mt-12'>
            {NAV_LINKS.map(({ label, href }) => (
              <SheetClose key={label} asChild>
                <Link className='text-2xl' href={href}>
                  {label}
                </Link>
              </SheetClose>
            ))}

            <SheetClose asChild>
              <Button className='w-full mt-4'>Get Started</Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
