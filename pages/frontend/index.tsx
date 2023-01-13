import { ReactElement } from 'react'

import { TextBottomLine } from '../../components/TextBottomLine'
import { Title } from '../../components/Title'

import { MdComputer, MdStorefront } from 'react-icons/md'
import { SkillBar } from '../../components/SkillBar'
import { SkillsText } from '../../components/SkillsText'

const Frontend = (): ReactElement => {
	return (
		<div className='flex flex-col'>
			<Title>Front-end Skills</Title>
			<div className='flex justify-between gap-20 px-32 py-14 xl:px-16 xl:py-7 lg:flex-col lg:items-center'>
				<div className='flex w-1/2 flex-col gap-10 lg:w-full'>
					<TextBottomLine>Com o que estou trabalhando</TextBottomLine>

					<SkillsText
						title='HTML, CSS, JavaScript'
						text='Possuo um bom conhecimento em HTML, CSS, JavaScript puro.'
						icon={
							<MdComputer className='h-10 w-10 flex-none text-bluePrimary' />
						}
					/>

					<SkillsText
						title={'React, Tailwind, Styled-components'}
						text={
							'Trabalho a um ano e meio com React, e recentemente usando TypeScript. Normalmente uso NextJs e Vite como base do projeto e Tailwind e Styled-Components como Framework, mas também consigo usando CSS puro.'
						}
						icon={
							<MdStorefront className='h-10 w-10 flex-none text-bluePrimary' />
						}
					/>
				</div>
				<div className='flex w-1/2 flex-col gap-10 lg:w-full'>
					<TextBottomLine>Habilidades</TextBottomLine>
					<div className='flex flex-col gap-4'>
						<SkillBar value={60}>HTML</SkillBar>
						<SkillBar value={85}>React</SkillBar>
						<SkillBar value={80}>JavaScript</SkillBar>
						<SkillBar value={75}>CSS</SkillBar>
						<SkillBar value={90}>TailWind</SkillBar>
						<SkillBar value={90}>Styled-components</SkillBar>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Frontend
