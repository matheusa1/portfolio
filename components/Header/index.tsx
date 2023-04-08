import Link from 'next/link'
import { ReactElement } from 'react'
import { useMenuContext } from '../../context/MenuContext'

export const Header = (): ReactElement => {
	const { activeLink, setActiveLink } = useMenuContext()

	const MenuOptionClassName = `text-lg font-bold text-white transition`

	return (
		<div className=' flex w-full justify-between p-14 md:flex-col md:items-center md:gap-4 md:px-0'>
			<Link
				href={'/'}
				className='transition hover:scale-110'
			>
				<span className='font-bold text-white '>Matheus Andrade</span>
			</Link>

			<div className='flex gap-10 sm:flex-col sm:items-center sm:gap-2'>
				<Link
					className={`${MenuOptionClassName}  ${
						activeLink === 0
							? 'text-white'
							: 'opacity-50 hover:text-bluePrimary hover:opacity-80'
					}`}
					href={'/'}
					onClick={() => setActiveLink(0)}
				>
					<span>Início</span>
				</Link>
				<Link
					className={`${MenuOptionClassName}  ${
						activeLink === 1
							? 'text-white'
							: 'opacity-50 hover:text-bluePrimary hover:opacity-80'
					}`}
					href={'/frontend'}
					onClick={() => setActiveLink(1)}
				>
					<span>Front-End Skills</span>
				</Link>
				<Link
					className={`${MenuOptionClassName}  ${
						activeLink === 2
							? 'text-white'
							: 'opacity-50 hover:text-bluePrimary hover:opacity-80'
					}`}
					href={'/portfolio'}
					onClick={() => setActiveLink(2)}
				>
					<span>Portfólio</span>
				</Link>
				<Link
					className={`${MenuOptionClassName}  ${
						activeLink === 3
							? 'text-white'
							: 'opacity-50 hover:text-bluePrimary hover:opacity-80'
					}`}
					href={'/contact'}
					onClick={() => setActiveLink(3)}
				>
					<span>Contato</span>
				</Link>
			</div>
		</div>
	)
}
