import { ReactElement } from 'react'

export const BottomLine = (): ReactElement => {
	return (
		<div className='flex'>
			<div className='h-[2px] w-10 bg-bluePrimary' />
			<div className='h-[2px] w-32 bg-strokeBgColor' />
		</div>
	)
}
