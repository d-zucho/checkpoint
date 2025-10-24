import Hero from '@/components/Hero'
import PowerfulTools from '@/components/home/PowerfulTools'
import Stats from '@/components/home/Stats'
import Tester from '@/components/Tester'

export default function Home() {
  return (
    <div className='overflow-x-clip'>
      <Hero />
      <PowerfulTools />
    </div>
  )
}
