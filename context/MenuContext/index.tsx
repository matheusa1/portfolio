import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react'

interface MenuContextData {
	activeLink: number
	setActiveLink: Dispatch<SetStateAction<number>>
}

interface MenuContextProviderProps {
	children: React.ReactNode
}

export const MenuContext = createContext({} as MenuContextData)

export function MenuContextProvider({ children }: MenuContextProviderProps) {
	const [activeLink, setActiveLink] = useState<number>(0)

	return (
		<MenuContext.Provider value={{ activeLink, setActiveLink }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenuContext = () => {
	return useContext(MenuContext)
}
