import { ReactElement } from 'react'
import * as Toasts from '@radix-ui/react-toast'
import cx from 'classnames'

interface ToastProps {
	text: string
	open: boolean
}

export const Toast = (props: ToastProps): ReactElement => {
	const { text, open } = props

	return (
		<Toasts.Provider>
			<Toasts.Root open={open}>
				<div
					className={cx(
						'fixed right-1/2 top-10 z-50 w-fit translate-x-1/2 rounded-lg text-center shadow-lg',
						'border-2 border-green-400 bg-white text-white dark:bg-gray-800',
						'px-4 py-2 text-sm md:text-base',
						'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
						'radix-state-closed:animate-toast-hide',
						'radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x',
						'radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x',
						'radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y',
						'radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y',
						'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
						'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
					)}
				>
					{text}
				</div>
			</Toasts.Root>
			<Toasts.Viewport />
		</Toasts.Provider>
	)
}
