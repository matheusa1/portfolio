import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import Image from 'next/image'
import * as HoverCard from '@radix-ui/react-hover-card'
import Link from 'next/link'

interface SiteProp {
	name: string
	url: string
	image: string
	description: string
	responsive: boolean
	repository: string
	tags: string[]
	isHover: boolean
	setIsHover: Dispatch<SetStateAction<boolean>>
}

export const SiteCard = (props: SiteProp): ReactElement => {
	const {
		name,
		url,
		image,
		description,
		responsive,
		repository,
		tags,
		isHover,
		setIsHover,
	} = props

	const [flag, setFlag] = useState<boolean>(false)

	return (
		<HoverCard.Root>
			<HoverCard.Trigger
				onMouseEnter={() => {
					setIsHover(true)
				}}
				onMouseLeave={() => {
					setIsHover(false)
				}}
				className={`h-auto w-auto duration-300 hover:scale-110 ${
					isHover && 'opacity-50 hover:opacity-100'
				} ${flag && 'scale-110 opacity-100'}`}
			>
				<Image
					src={image}
					alt={''}
					width={475}
					height={300}
					className='rounded-xl'
				/>
			</HoverCard.Trigger>
			<HoverCard.Content
				onMouseEnter={() => {
					setIsHover(true)
					setFlag(true)
				}}
				onMouseLeave={() => {
					setIsHover(false)
					setFlag(false)
				}}
				className='z-10 min-w-[400px]'
			>
				<div className='flex flex-col gap-4 rounded-lg bg-white p-10'>
					<h1 className='text-xl font-bold'>{name}</h1>
					<span className='text-sm'>{description}</span>
					<div className='flex w-full justify-between'>
						<Link
							href={url}
							target='_blank'
							className='text-base text-blue-500'
						>
							Visitar Site
						</Link>

						<Link
							href={repository}
							target='_blank'
							className='text-base text-blue-500'
						>
							Visitar Repositório
						</Link>
					</div>

					<div className='flex justify-between'>
						<div className='flex flex-col gap-2'>
							<span>Tecnologias usadas: </span>
							<div className='flex flex-col text-sm'>
								{tags.map((tag, index) => (
									<span key={index}>{tag}</span>
								))}
							</div>
						</div>

						<span
							className={`${responsive ? 'text-green-500' : 'text-red-500'}`}
						>
							{responsive ? 'Responsivo' : 'Não Responsivo'}
						</span>
					</div>
				</div>
				<HoverCard.HoverCardArrow className='fill-current text-white' />
			</HoverCard.Content>
		</HoverCard.Root>
	)
}
