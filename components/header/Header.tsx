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
    <header className={''}>
      <MaxWidthWrapper>
        <div className={'flex justify-between items-center py-5'}>
          {/*Logo*/}
          <div className='shrink-0'>
            <Link href='/'>
              <Image
                src='/logo.png'
                width={150}
                height={100}
                alt='CheckPoint'
                className='hidden md:block'
              />

              <Image
                src={'/svg/Shield-svg.svg'}
                width={50}
                height={100}
                alt='CheckPoint Logo'
                className='md:hidden'
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className='hidden md:block'>
            <NavLinks />
          </div>

          {/* Auth Buttons */}
          <div className='md:flex items-center gap-4 hidden'>
            <Link
              href={'/'}
              className={`${buttonVariants({
                variant: 'outline',
              })} transition-all duration-300 px-6 text-link border-my-blue-500 border-2 hover:shadow-md hover:shadow-my-blue-200 hover:bg-my-blue-500/20 hover:text-link hover:border-transparent`}
            >
              Login
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
