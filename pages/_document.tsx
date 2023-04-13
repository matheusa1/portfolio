import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					rel='icon'
					href={'/favicon.ico'}
				/>
				<meta
					name='google-site-verification'
					content='d731b__l_zUyNDqYSyQgqxYRG0gJVOS6BnSGXFgXbFI'
				/>
			</Head>
			<body className='scrollbar bg-bgColor'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
