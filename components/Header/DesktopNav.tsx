import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { Button, buttonVariants } from '@/components/ui/button'
import MobileNav from './MobileNav'
import { cn } from '@/lib/utils'

const DesktopNav = () => {
  return (
    <div className={'w-full'}>
      <MaxWidthWrapper>
        <nav className={'flex items-center justify-between'}>
          <div className={'flex items-center space-x-10'}>
            {/* LOGO */}
            <Link href={'/'} className='shrink-0'>
              <Image
                src={'/logo.svg'}
                alt={'logo'}
                width={140}
                height={30}
                className='shrink-0'
              />
            </Link>

            {/*	NAV LINKS */}
            <div className={'hidden md:flex items-center gap-4'}>
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={
                    'text-gray-500 hover:text-gray-600 px-3 py-1 hover:bg-gray-900/5 rounded-md transition-all duration-300'
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <Link
              href={'/'}
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              Get Started
            </Link>
            <div className='md:hidden flex items-center gap-4'>
              <MobileNav />
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </div>
  )
}

export default DesktopNav
