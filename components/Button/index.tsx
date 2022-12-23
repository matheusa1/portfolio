import { ReactElement } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	strokeColor: string
}

export const Button = (props: ButtonProps): ReactElement => {
	const { strokeColor, children, ...rest } = props
	return (
		<button
			className={`${strokeColor} rounded-full border-2 px-12 py-3 text-xl font-normal text-white`}
			{...rest}
		>
			{children}
		</button>
	)
}
