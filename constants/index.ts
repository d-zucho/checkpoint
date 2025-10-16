import { NavLink, TStat } from '@/lib/types'

export const NAV_LINKS: NavLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/search',
    label: 'Search',
  },
  {
    href: '/Politicians',
    label: 'Politicians',
  },
]

export const STAT_LIST: TStat[] = [
  {
    data: '5,000+',
    title: 'Politicians Tracked',
  },
  {
    data: '8,500+',
    title: 'Statements Reviewed',
  },
  {
    data: '300+',
    title: 'Legislative Updates ',
  },
  {
    data: '5,000+',
    title: 'Active Users',
  },
]
