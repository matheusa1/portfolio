import Link from 'next/link'
import { ReactElement } from 'react'

export const Footer = (): ReactElement => {
	const date = new Date()

	return (
		<div className=' flex w-full justify-between border-t-2 border-t-strokeBgColor px-14 py-4 text-white xs:px-7'>
			<div className='flex gap-5 xs:gap-3'>
				<Link
					href={'https://www.linkedin.com/in/matheus-andrade-a8a6b6233/'}
					target='_blank'
					className='opacity-50 transition hover:scale-110 hover:opacity-100'
				>
					LinkedIn
				</Link>
				{/* <Link
					href={''}
					target='_blank'
					className='opacity-50 transition hover:scale-110 hover:opacity-100'
				>
					Instagram
				</Link> */}
			</div>
			<span className='opacity-80'>@{date.getFullYear()}</span>
		</div>
	)
}
