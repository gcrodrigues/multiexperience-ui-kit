import React, {
	PropsWithChildren,
	createContext,
	useCallback,
	useState,
} from 'react'

interface MultiexperienceContextProps {
	isDarkMode: boolean
	setDarkMode: () => void
}

export const MultiexperienceContext =
	createContext<MultiexperienceContextProps>({
		isDarkMode: false,
		setDarkMode: () => '',
	})

const MultiexperienceProvider = ({ children }: PropsWithChildren) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const setDarkMode = useCallback(() => {
		setIsDarkMode(!isDarkMode)
		document.querySelector('html')?.classList.toggle('dark')
	}, [isDarkMode])

	return (
		<MultiexperienceContext.Provider value={{ isDarkMode, setDarkMode }}>
			{children}
		</MultiexperienceContext.Provider>
	)
}

export default MultiexperienceProvider
