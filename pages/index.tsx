import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { Button } from '../components/Button'

import ImageHome from '../assets/ImageHome.svg'

export default function Home(): ReactElement {
	const router = useRouter()

	return (
		<div className='flex h-full w-full items-center justify-center gap-20 xl:gap-10 xl:px-10 lg:mb-20 lg:flex-col'>
			<div className=''>
				<Image
					className='min-h-[480px] min-w-[480px] xs:min-h-full xs:min-w-full'
					src={ImageHome}
					alt={''}
				/>
			</div>
			<div className='xsSm: flex max-w-[803px] select-none flex-col gap-11 xsSm:items-center xsSm:text-center'>
				<span className='text-2xl text-white opacity-50 xl:text-xl'>
					Desenvolvedor Front-end
				</span>
				<span className='text-7xl font-bold text-white xl:text-4xl'>
					Matheus Andrade
				</span>
				<span className='text-xl text-white xl:text-base'>
					Me chamo Matheus e sou um estudante de Ciências da Computação na
					UTFPR(Universidade Tecnológica Federal do Paraná) - Campo Mourão,
					Atualmente no 4º Período. Tenho 20 anos e sou apaixonado por
					tecnologia e programação, sempre buscando aprender mais e mais.
					Atualmente estou focado em desenvolvimento{' '}
					<span className='text-blue-400'>front-end</span> por meio de{' '}
					<span className='text-red-400'>React</span> usando{' '}
					<span className='text-yellow-400'>tailwind</span>,{' '}
					<span className='text-green-400'>styled-components</span>, mas também
					tenho conhecimento em <span className='text-pink-400'>C</span>.
				</span>
				<div className='flex gap-4'>
					<Button
						strokeColor={'border-bluePrimary'}
						onClick={() => router.push('/portfolio')}
					>
						Portfolio
					</Button>
					<Button
						strokeColor={'border-white'}
						onClick={() => router.push('/contact')}
					>
						Contato
					</Button>
				</div>
			</div>
		</div>
	)
}
