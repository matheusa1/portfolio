import { ReactElement } from 'react'

interface TitleProps {
	children: string
}

export const Title = ({ children }: TitleProps): ReactElement => {
	return (
		<div className='select-none border-y-2 border-strokeBgColor bg-bgTitle px-16 py-12 sm:px-8 sm:py-6'>
			<span className='text-5xl font-bold text-white sm:text-xl'>
				{children}
			</span>
		</div>
	)
}
