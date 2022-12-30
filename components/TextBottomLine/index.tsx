import { ReactElement } from 'react'

interface Props {
	children: string
}

export const TextBottomLine = ({ children }: Props): ReactElement => {
	return (
		<div className='flex select-none flex-col'>
			<span className='text-2xl font-bold text-white'>{children}</span>
			<div className='flex'>
				<div className='h-[2px] w-10 bg-bluePrimary' />
				<div className='h-[2px] w-32 bg-strokeBgColor' />
			</div>
		</div>
	)
}
