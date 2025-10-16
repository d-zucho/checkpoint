import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className=''>
      <nav className={'hidden md:flex gap-5 font-medium'}>
        {NAV_LINKS.map((link) => (
          <div
            key={link.label}
            className='w-fit block relative overflow-hidden group'
          >
            <Link
              href={link.href}
              className={
                'relative hover:font-semibold' +
                ' hover:scale-[1.01] transition-all duration-300 text-link'
              }
            >
              {link.label}
            </Link>
            {/* <div className='absolute w-full h-[4px] inset-x-0 bottom-0 bg-gradient-to-r  from-blue-500 to-violet-500 rounded-full -translate-x-[75%] group-hover:translate-x-[15%] transition-all duration-700' /> */}
            <div className='bg-gradient-to-r from-blue-600 to-violet-600 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 rounded-full' />
          </div>
        ))}
      </nav>
    </div>
  )
}

export default NavLinks
