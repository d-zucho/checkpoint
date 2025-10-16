import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { MyButton } from './MyButton'

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <div className={'mt-28 relative h-screen'}>
        <div>
          <h1
            className={
              'font-bold font-title! text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center' +
              ' text-heading leading-[64px] md:leading-20'
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
              'text-text font-medium text-lg max-w-lg' +
              ' text-center' +
              ' mx-auto pt-4'
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
              Start Fact-Checking Now!
            </MyButton>
            <div className='relative group'>
              <Link href='/'>Learn How It Works</Link>
              <div className='bg-gradient-to-r from-blue-600 to-violet-600 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 rounded-full' />
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

        {/*<div className={''}>*/}
        {/*	<h1 className={'font-title! text-5xl xl:text-[80px]' +*/}
        {/*		' font-bold max-w-lg' +*/}
        {/*		' lg:max-w-2xl tracking-wide' +*/}
        {/*		' xl:leading-28 max-sm:text-4xl'}>Find <span>Truth</span> <br />in Political Claims*/}
        {/*	</h1>*/}
        {/*</div>*/}

        {/*<div className={' w-fit'}>*/}
        {/*	<Image*/}
        {/*		src={'/LieMeter2.png'}*/}
        {/*		width={400}*/}
        {/*		height={400}*/}
        {/*		alt={'Lie Meter'}*/}
        {/*		className={'shrink-0'}*/}
        {/*	/>*/}
        {/*</div>*/}
      </div>
    </MaxWidthWrapper>
  )
}

export default Hero
