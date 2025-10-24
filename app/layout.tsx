import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Manrope } from 'next/font/google'
import './globals.css'
import React from 'react'
import Header from '@/components/header/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CheckPoint',
  description: 'Find the truth in political claims',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${montserrat.variable} ${manrope.variable} antialiased min-h-screen `}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
