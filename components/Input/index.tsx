import { InputHTMLAttributes, ReactElement } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	addClassName?: string
}

export const Input = ({ addClassName, ...rest }: InputProps): ReactElement => {
	return (
		<input
			{...rest}
			className={`${addClassName} rounded border-2 border-strokeInputColor bg-transparent py-4 px-5 text-white`}
		/>
	)
}
