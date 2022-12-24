import { ReactElement } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface LayoutProps {
	children: ReactElement
}

export const Layout = (props: LayoutProps): ReactElement => {
	const { children } = props
	return (
		<div className='flex min-h-screen w-screen flex-col justify-between bg-bgColor'>
			<Header />
			<div className='h-full w-full'>{children}</div>
			<Footer />
		</div>
	)
}
