import { ReactElement, useEffect, useState } from 'react'
import { SiteCard } from '../../components/SiteCard'
import { TextBottomLine } from '../../components/TextBottomLine'
import { Title } from '../../components/Title'

import Data from '../../public/Data/data.json'

interface SiteProp {
	name: string
	url: string
	image: string
	description: string
	responsive: boolean
	repository: string
	tags: string[]
}

const Portfolio = (): ReactElement => {
	const [project, setProject] = useState<string>('Todos')
	const [frameworks, setFrameworks] = useState<string>('Todos')
	const [data, setData] = useState<SiteProp[]>(Data?.sites)
	const [isHover, setIsHover] = useState<boolean>(false)

	useEffect(() => {
		if (project === 'Todos' && frameworks === 'Todos') {
			setData(Data?.sites)
		} else if (project === 'Todos' && frameworks !== 'Todos') {
			setData(
				Data?.sites.filter((site) => {
					return site.tags.includes(frameworks)
				})
			)
		} else if (project !== 'Todos' && frameworks === 'Todos') {
			setData(
				Data?.sites.filter((site) => {
					return site.tags.includes(project)
				})
			)
		} else {
			setData(
				Data?.sites.filter((site) => {
					return site.tags.includes(project) && site.tags.includes(frameworks)
				})
			)
		}
	}, [project, frameworks])

	return (
		<div>
			<Title>Portfólio</Title>
			<div>
				<div className='flex flex-col gap-5 px-28 py-11'>
					<TextBottomLine>Projeto</TextBottomLine>
					<div className='flex gap-12'>
						<span
							onClick={() => setProject('Todos')}
							className={`${
								project === 'Todos'
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Todos
						</span>
						<span
							onClick={() => setProject('NextJs')}
							className={`${
								project === 'NextJs'
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							NextJs
						</span>
						<span
							onClick={() => setProject('Vite')}
							className={`${
								project === 'Vite'
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Vite
						</span>
					</div>
					<TextBottomLine>Framework</TextBottomLine>
					<div className='flex gap-12'>
						<span
							onClick={() => setFrameworks('Todos')}
							className={`${
								frameworks === 'Todos'
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Todos
						</span>
						<span
							onClick={() => setFrameworks('Styled-Components')}
							className={`${
								frameworks === 'Styled-Components'
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Styled-Components
						</span>
						<span
							onClick={() => setFrameworks('Tailwind')}
							className={`${
								frameworks === 'Tailwind'
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Tailwind
						</span>
					</div>
					<div className='grid w-full grid-cols-3 gap-10'>
						{data.map((site, index) => {
							return (
								<SiteCard
									key={index}
									name={site?.name}
									url={site?.url}
									image={site?.image}
									description={site?.description}
									responsive={site?.responsive}
									repository={site?.repository}
									tags={site?.tags}
									isHover={isHover}
									setIsHover={setIsHover}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
