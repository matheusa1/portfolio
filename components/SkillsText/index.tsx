import { ReactElement } from 'react'

interface SkillsTextProps {
	title: string
	text: string
	icon: ReactElement
}

export const SkillsText = (props: SkillsTextProps): ReactElement => {
	const { title, text, icon } = props

	return (
		<div className='flex flex-col gap-6'>
			<div className='flex items-center gap-7'>
				{icon}
				<div className='flex flex-col gap-4 text-white'>
					<h1>{title}</h1>
					<span className='opacity-50'>{text}</span>
				</div>
			</div>
		</div>
	)
}
