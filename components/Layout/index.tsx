import { ReactElement } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface LayoutProps {
	children: ReactElement
}

export const Layout = (props: LayoutProps): ReactElement => {
	const { children } = props
	return (
		<div className='max-w-screen flex min-h-screen flex-col justify-between overflow-auto'>
			<div className='h-full w-full'>
				<Header />
				{children}
			</div>
			<Footer />
		</div>
	)
}
