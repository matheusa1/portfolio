import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { MenuContextProvider } from '../context/MenuContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MenuContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MenuContextProvider>
	)
}
