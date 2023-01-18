import { HTMLAttributes, ReactElement } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	addClassName: string
}

export const Button = (props: ButtonProps): ReactElement => {
	const { addClassName, children, ...rest } = props
	return (
		<button
			className={`${addClassName} w-fit rounded-full border-2 px-12 py-3 text-xl font-normal text-white lg:px-6 lg:py-2 lg:text-base`}
			{...rest}
		>
			{children}
		</button>
	)
}
