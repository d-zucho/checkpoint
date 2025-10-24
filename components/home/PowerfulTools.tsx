import { SearchIcon } from 'lucide-react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { FEATURES_LIST } from '@/constants'
import { cn } from '@/lib/utils'
import FeatureCard from '../FeatureCard'

const PowerfulTools = () => {
  return (
    <section className='my-20'>
      <MaxWidthWrapper>
        <div className='text-center md:text-left'>
          <h2 className='uppercase text-sm tracking-widest font-black mb-4 text-heading'>
            Features
          </h2>
          <h3 className='text-3xl sm:text-4xl font-semibold font-title mb-3 text-heading'>
            Powerful Tools for Truth-Seekers
          </h3>

          <p className='text-text-primary max-w-lg mb-10 mx-auto md:mx-0'>
            A platform combines journalistic rigor with modern technology to
            help you navigate the complex world of political discourse.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6'>
          {/* Features List */}

          {FEATURES_LIST.map((feature) => (
            // <div
            //   key={feature.title}
            //   className=' w-[300px] bg-gray-200 rounded-lg p-6 group transition-colors duration-500'
            // >
            //   <div className={cn('w-fit p-3 rounded-lg', feature.color)}>
            //     <feature.icon size={28} className={cn('')} />
            //   </div>

            //   <div>
            //     <h4 className='font-semibold'>{feature.title}</h4>
            //     <p className='text-text-secondary'>{feature.description}</p>
            //   </div>
            // </div>
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default PowerfulTools
