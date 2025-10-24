import { NavLink, TStat, TSuiteFeature } from '@/lib/types'
import { SearchIcon, Shield, TrendingUp, Users } from 'lucide-react'

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
]

export const FEATURES_LIST: TSuiteFeature[] = [
  {
    title: 'Search Politicians',
    description:
      'Easily search for politicians and public figures to access their statements and fact-checks.',
    icon: SearchIcon,
    color:
      'text-teal-200 bg-teal-600 group-hover:bg-teal-700 transition-all duration-500 group-hover:text-white',
  },
  {
    title: 'Verify Claims',
    description:
      'Get sourced truth ratings with detailed explanations and verified sources.',
    icon: Shield,
    color:
      'text-blue-200 bg-sky-600 group-hover:bg-sky-700 transition-all duration-500 group-hover:text-white',
  },
  {
    title: 'Track Trends',
    description:
      'See honesty scores and patterns across different topics and time periods.',
    icon: TrendingUp,
    color:
      'text-purple-200 bg-purple-600 group-hover:bg-purple-700 transition-all duration-500 group-hover:text-white',
  },
  {
    title: 'Compare Records',
    description:
      'Compare politicians side-by-side to evaluate their truthfulness and consistency.',
    icon: Users,
    color:
      'text-green-200 bg-green-600 group-hover:bg-green-700 transition-all duration-500 group-hover:text-white',
  },
]
