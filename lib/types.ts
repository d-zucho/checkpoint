import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

export type NavLink = { href: string; label: string }

export type TStat = {
  data: string
  title: string
}

export type TSuiteFeature = {
  title: string
  description: string
  icon: LucideIcon | IconType
  color: string
}
