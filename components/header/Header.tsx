import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import { LogIn } from 'lucide-react'

const Header = () => {
  return (
    <header className={'h-[80px]'}>
      <MaxWidthWrapper>
        <div className={'flex justify-between items-center py-5'}>
          {/*Logo*/}
          <div className='flex items-end gap-6'>
            <div className='shrink-0'>
              <Link href='/'>
                <Image
                  src='/logo.png'
                  width={150}
                  height={100}
                  alt='CheckPoint'
                  className=''
                />
                {/* <Image
                  src={'/svg/Shield-svg.svg'}
                  width={50}
                  height={100}
                  alt='CheckPoint Logo'
                  className='md:hidden'
                /> */}
              </Link>
            </div>
            {/* Nav Links */}
            <div className='hidden md:block'>
              <NavLinks />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className='md:flex items-center gap-4 hidden'>
            <Link
              href={'/'}
              className={`${buttonVariants({
                variant: 'outline2',
              })} transition-all duration-300 px-6 `}
            >
              Login
              <span className='hover:shadow-my-blue-200!  absolute inset-0 z-0'></span>
            </Link>

            <Button
              variant={'mine'}
              className='text-white px-6 hover:shadow-md transition-all duration-300'
            >
              <div className='absolute inset-0 rounded-md hover:shadow-md hover:shadow-my-blue-200 transition-all duration-300 z-0' />
              Sign Up
              <LogIn />
            </Button>
          </div>

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
