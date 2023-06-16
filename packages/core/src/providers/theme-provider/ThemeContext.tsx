import React, {
	PropsWithChildren,
	createContext,
	useCallback,
	useState,
} from 'react'

interface ThemeProps {
	isDarkMode: boolean
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeProps>({
	isDarkMode: false,
	toggleTheme: () => '',
})

const THemeProvider = ({ children }: PropsWithChildren) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleTheme = useCallback(() => {
		setIsDarkMode(!isDarkMode)
		document.querySelector('html')?.classList.toggle('dark')
	}, [isDarkMode])

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default THemeProvider
