import { HTMLAttributes, ReactElement } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	strokeColor: string
}

export const Button = (props: ButtonProps): ReactElement => {
	const { strokeColor, children, ...rest } = props
	return (
		<button
			className={`${strokeColor} w-fit rounded-full border-2 px-12 py-3 text-xl font-normal text-white lg:px-6 lg:py-2 lg:text-base`}
			{...rest}
		>
			{children}
		</button>
	)
}
