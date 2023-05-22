export const OVariants = {
	Primary: 'primary',
	Success: 'success',
	Secondary: 'secondary',
	Warning: 'warning',
	Info: 'info',
	Ghost: 'ghost',
	Default: 'default',
} as const

export type Variants = (typeof OVariants)[keyof typeof OVariants]

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variants
}
