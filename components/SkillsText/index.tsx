import { ReactElement } from 'react'

interface SkillsTextProps {
	title: string
	text: string
	icon: ReactElement
}

export const SkillsText = (props: SkillsTextProps): ReactElement => {
	const { title, text, icon } = props

	return (
		<div className='flex select-none items-center gap-7'>
			{icon}
			<div className='flex flex-col gap-2 text-white'>
				<h1>{title}</h1>
				<span className='text-sm opacity-50'>{text}</span>
			</div>
		</div>
	)
}
