import { ReactElement } from 'react'
import * as Progress from '@radix-ui/react-progress'

interface ProgressBarProps {
	value: number
	children: string
}

export const SkillBar = (props: ProgressBarProps): ReactElement => {
	const { value, children } = props

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between'>
				<span className='text-white'>{children}</span>
				<span className='text-white opacity-50'>{`${value}%`}</span>
			</div>
			<Progress.Root
				value={value}
				className='h-2 w-full overflow-hidden rounded-full bg-bluePrimary dark:bg-strokeBgColor'
			>
				<Progress.Indicator
					style={{ width: `${value}%` }}
					className='h-full bg-purple-500 duration-300 ease-in-out dark:bg-bluePrimary'
				/>
			</Progress.Root>
		</div>
	)
}
