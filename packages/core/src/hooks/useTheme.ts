import { useContext } from 'react'
import { ThemeContext } from '../providers'

interface Theme {
	isDarkMode: boolean
	toggleTheme: () => void
}

export default function useTheme(): Theme {
	const context = useContext(ThemeContext)

	return context
}
