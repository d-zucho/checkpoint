import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
													 className,
													 children,
												 }: {
	className?: string
	children: ReactNode
}) => {
	return (
		<div
			className={cn(
				'h-full mx-auto w-full md:max-w-[1024px] xl:max-w-[1240px]' +
				' px-4 md:px-10',
				className
			)}
		>
			{children}
		</div>
	)
}

export default MaxWidthWrapper
