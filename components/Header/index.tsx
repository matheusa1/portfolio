import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { useMenuContext } from '../../context/MenuContext'

export const Header = (): ReactElement => {
	// const { activeLink, setActiveLink } = useMenuContext()
	const [activeLink, setActiveLink] = useState(0)

	const router = useRouter()

	useEffect(() => {
		switch (router.pathname) {
			case '/frontend':
				setActiveLink(1)
				break
			case '/portfolio':
				setActiveLink(2)
				break
			case '/contact':
				setActiveLink(3)
				break
			default:
				setActiveLink(0)
				break
		}
	}, [router.pathname])

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
					className={`text-lg font-bold text-white transition ${
						activeLink !== 0 ? 'opacity-50' : 'hover:opacity-80'
					}`}
					href={'/'}
					onClick={() => setActiveLink(0)}
				>
					<span>Início</span>
				</Link>
				<Link
					className={`text-lg font-bold text-white transition ${
						activeLink !== 1 ? 'opacity-50' : 'hover:opacity-80'
					}`}
					href={'/frontend'}
					onClick={() => setActiveLink(1)}
				>
					<span>Front-End Skills</span>
				</Link>
				<Link
					className={`text-lg font-bold text-white transition ${
						activeLink !== 2 ? 'opacity-50' : 'hover:opacity-80'
					}`}
					href={'/portfolio'}
					onClick={() => setActiveLink(2)}
				>
					<span>Portfólio</span>
				</Link>
				<Link
					className={`text-lg font-bold text-white transition ${
						activeLink !== 3 ? 'opacity-50' : 'hover:opacity-80'
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
