export const OVariants = {
	Primary: 'primary',
	Success: 'success',
	Warning: 'warning',
	Info: 'info',
	Ghost: 'ghost',
	Default: 'default',
	Danger: 'danger',
} as const

export type Variants = (typeof OVariants)[keyof typeof OVariants]

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variants
}
