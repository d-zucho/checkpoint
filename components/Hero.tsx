import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { MyButton } from './MyButton'

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <div className={'mt-28 relative'}>
        <div>
          <h1
            className={
              'font-bold font-title! text-6xl text-center' +
              ' text-heading' +
              ' leading-20'
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

          <div className={'flex justify-center items-center gap-4 mt-10'}>
            <MyButton className='px-8 py-4 font-semibold text-white'>
              Start Fact-Checking Now!
            </MyButton>
            <Button
              variant={'outline'}
              className='font-semibold text-muted-foreground'
            >
              How It Works
            </Button>
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
