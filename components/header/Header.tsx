import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <header className={''}>
      <MaxWidthWrapper>
        <div className={'flex justify-between items-center py-5'}>
          {/*Logo*/}
          <div>
            <Image src='/logo.png' width={150} height={100} alt='logo' />
          </div>

          {/*	Nav Links*/}
          {/* <nav className={'flex gap-5 font-medium'}>
					{
						NAV_LINKS.map((link) => (
							<Link key={link.label} href={link.href}
										className={'relative hover:text-blue-700' +
											' hover:scale-[1.01] transition-all'}
							>{link.label}</Link>
						))
					}
				</nav> */}
          <NavLinks />

          <div className='flex items-center gap-4'>
            <Link
              href={'/'}
              className={`${buttonVariants({
                variant: 'outline',
              })} transition-all duration-500 px-6 text-link`}
            >
              Login
            </Link>
            <Button variant={'mine'} className='text-white px-6'>
              Sign Up
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
