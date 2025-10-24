import { cn } from '@/lib/utils'
import Image from 'next/image'

const ArrowButton = ({ className }: { className: string }) => {
  return (
    <div className={cn('w-fit rounded-full relative', className)}>
      <div className='flex items-center justify-center w-40 h-40 rounded-full border-1 bg-gradient-to-br from-my-purple-500 to-my-purple-700 shadow-[inset_-20px_-10px_23px_4px_rgba(0,_0,_0,_0.4)] relative'>
        <Image
          src={'/svg/whiteDownArrow.svg'}
          alt='Read More'
          width={200}
          height={100}
          className='animate-small-bounce z-50'
        />
        <div className='absolute inset-0 rounded-full shadow-[inset_8px_8px_20px_12px_rgba(147,_51,_234,_0.5)]' />
      </div>
    </div>
  )
}

// to control the amount of bounce in animate-bounce you can create a custom animation in Tailwind v4 like this:
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         bounceCustom: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-15%)' }, // Adjust the -15% to control the height of the bounce
//         },
//       },
//       animation: {
//         bounceCustom: 'bounceCustom 1s infinite',
//       },
//     },
//   },
// }

export default ArrowButton
