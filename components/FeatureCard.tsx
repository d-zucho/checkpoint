import { TSuiteFeature } from '@/lib/types'
import { cn } from '@/lib/utils'
import React from 'react'

const FeatureCard = (feature: TSuiteFeature) => {
  return (
    <div
      key={feature.title}
      className='bg-gray-200 rounded-lg p-4 group transition-colors duration-500 flex items-start shadow-lg claim-card'
    >
      <div className={cn('w-fit p-3 rounded-md mr-3', feature.color)}>
        <feature.icon className={cn('w-8 h-8 verdict-badge')} />
      </div>

      <div>
        <h4 className='font-semibold text-xl mb-2'>{feature.title}</h4>
        <p className='text-text-secondary'>{feature.description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
