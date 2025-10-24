import { STAT_LIST } from '@/constants'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Stats = () => {
  return (
    <section className='py-14'>
      <MaxWidthWrapper className=''>
        <div className='mt-12'>
          <ul className='flex flex-col items-center justify-center max-lg:gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x lg:divide-black/30'>
            {STAT_LIST.map((item, idx) => (
              <li key={idx} className='text-center px-12 md:px-16'>
                <h4 className='text-3xl md:text-4xl text-indigo-700 font-black'>
                  {item.data}
                </h4>
                <p className='mt-3 font-medium text-text-secondary'>
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
export default Stats
