import { ReactElement } from 'react'

interface TitleProps {
	children: string
}

export const Title = ({ children }: TitleProps): ReactElement => {
	return (
		<div className='border-y-2 border-strokeBgColor bg-bgTitle px-16 py-24 sm:px-8 sm:py-12'>
			<span className='text-5xl font-bold text-white sm:text-xl'>
				{children}
			</span>
		</div>
	)
}
