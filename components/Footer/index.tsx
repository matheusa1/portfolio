import Link from 'next/link'
import { ReactElement } from 'react'

export const Footer = (): ReactElement => {
	return (
		<div className='flex justify-between border-t-2 border-t-strokeBgColor px-14 py-4 text-white xs:px-7'>
			<div className='flex gap-5 opacity-50 xs:gap-3'>
				<Link href={''}>Facebook</Link>
				<Link href={''}>Instagram</Link>
			</div>
			<span className='opacity-80'>@2022</span>
		</div>
	)
}
