import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import Image from 'next/image'
import * as Popover from '@radix-ui/react-popover'
import Link from 'next/link'
import { TextBottomLine } from '../TextBottomLine'

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

	const [open, setOpen] = useState<boolean>(false)

	return (
		<Popover.Root open={open}>
			<Popover.Trigger
				onMouseEnter={() => {
					setIsHover(true)
					setOpen(true)
				}}
				onMouseLeave={() => {
					setIsHover(false)
					setOpen(false)
				}}
				className={`h-auto w-auto duration-300 hover:scale-110 ${
					isHover && 'opacity-50 hover:opacity-100'
				} ${open && 'scale-110 opacity-100'}`}
			>
				<Image
					src={image}
					alt={''}
					width={475}
					height={300}
					className='rounded-xl focus:outline-none'
				/>
			</Popover.Trigger>
			<Popover.Content
				onMouseEnter={() => {
					setIsHover(true)
					setOpen(true)
				}}
				onMouseLeave={() => {
					setIsHover(false)
					setOpen(false)
				}}
				className='z-10 w-[400px] focus:outline-none xs:w-[80vw]'
			>
				<div className='flex flex-col gap-4 rounded-lg bg-bgColor p-10 text-white shadow-2xl shadow-strokeBgColor'>
					<TextBottomLine>{name}</TextBottomLine>
					<span className='text-xs'>{description}</span>
					<div className='grid grid-cols-2 gap-2 xs:grid-cols-1 xs:text-center'>
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
							className='text-right text-base text-blue-500 xs:text-center'
						>
							Visitar Repositório
						</Link>
						<div className='flex flex-col gap-2 border-r-2 border-r-strokeBgColor pr-10 xs:border-none xs:pr-0'>
							<span>Tecnologias usadas: </span>
							<div className='flex flex-col text-xs'>
								{tags.map((tag, index) => (
									<span key={index}>{tag}</span>
								))}
							</div>
						</div>

						<span
							className={`${
								responsive ? 'text-green-500' : 'text-red-500'
							} text-right xs:text-center`}
						>
							{responsive ? 'Responsivo' : 'Não Responsivo'}
						</span>
					</div>
				</div>

				<Popover.PopoverArrow className='fill-current text-strokeBgColor' />
			</Popover.Content>
		</Popover.Root>
	)
}
