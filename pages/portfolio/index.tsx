import { ReactElement, useState } from 'react'
import { TextBottomLine } from '../../components/TextBottomLine'
import { Title } from '../../components/Title'

const Portfolio = (): ReactElement => {
	const [project, setProject] = useState<number>(0)
	const [frameworks, setFrameworks] = useState<number>(0)

	return (
		<div>
			<Title>Portfólio</Title>
			<div>
				<div className='flex flex-col gap-5 px-28 py-11'>
					<TextBottomLine>Projeto</TextBottomLine>
					<div className='flex gap-12'>
						<span
							onClick={() => setProject(0)}
							className={`${
								project === 0
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Todos
						</span>
						<span
							onClick={() => setProject(1)}
							className={`${
								project === 1
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							NextJs
						</span>
						<span
							onClick={() => setProject(2)}
							className={`${
								project === 2
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
							onClick={() => setFrameworks(0)}
							className={`${
								frameworks === 0
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Todos
						</span>
						<span
							onClick={() => setFrameworks(1)}
							className={`${
								frameworks === 1
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Styled-Components
						</span>
						<span
							onClick={() => setFrameworks(2)}
							className={`${
								frameworks === 2
									? 'cursor-default text-white'
									: 'cursor-pointer text-white opacity-50'
							} transition duration-300`}
						>
							Tailwind
						</span>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
