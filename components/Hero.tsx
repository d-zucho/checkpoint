import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { MyButton } from './MyButton'
import { ArrowRightCircle, ArrowRightIcon, User } from 'lucide-react'
import ArrowButton from './home/ArrowButton'
// background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <div className={'mt-28 relative h-[calc(100vh-192px)] z-0 hero'}>
        {/* <div className=' absolute w-[800px] h-[800px] rounded-full -bottom-80 -right-120 bg-gradient-to-tr from-[#48c6ef]/30 via-violet-500/30 to-pink-500/30 blur-3xl -z-10 animate-small-bounce' /> */}
        {/* <div className=' absolute w-[900px] h-[900px] rounded-full bottom-20 -left-120 bg-radial from-emerald-500/20 to-yellow-300/20 blur-3xl -z-50 animate-small-bounce' /> */}
        <div className='z-50'>
          <h1
            className={
              'font-bold font-title! text-[40px] sm:text-6xl md:text-[80px] text-center' +
              ' text-heading leading-[64px] md:leading-20 tracking-tight z-50'
            }
          >
            Get to the{' '}
            <span
              className={
                'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'
              }
            >
              Truth
            </span>{' '}
            <br /> in Politics
          </h1>

          <p
            className={
              'text-text-primary font-medium text-lg max-w-lg' +
              ' text-center' +
              ' mx-auto pt-4 md:pt-6'
            }
          >
            In an era of misinformation, CheckPoint helps you verify what’s been
            said—by politicians, candidates, and public figures—using sourced
            facts.
          </p>

          {/* Buttons */}
          <div
            className={
              'pt-6 flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 relative w-fit mx-auto'
            }
          >
            <MyButton className='px-8 py-4 font-semibold text-white'>
              {/* <div className='absolute inset-0 rounded-md hover:shadow-md hover:shadow-my-blue-200 transition-all duration-300' /> */}
              Start for Free Now!
            </MyButton>
            <div className='relative group'>
              <Link
                className={buttonVariants({ variant: 'outline2' })}
                href='/'
              >
                Learn How It Works
              </Link>
              {/* <div className='bg-gradient-to-r from-blue-600 to-violet-600 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 rounded-full' /> */}
            </div>

            <Image
              src={'/svg/DrawnArrow2.svg'}
              width={200}
              height={200}
              alt='arrow'
              className='absolute -bottom-[100px] -left-20 md:bottom-[-150px] md:-left-40 w-[125px] md:w-[200px] hidden sm:block'
            />
          </div>
        </div>

        {/* <ArrowButton className={'absolute bottom-20 right-0'} /> */}
      </div>
    </MaxWidthWrapper>
  )
}

export default Hero
