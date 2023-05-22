import { ArgTypes } from '@storybook/react'
import { ButtonProps } from './types'

export const argTypes: Partial<ArgTypes<ButtonProps>> = {
	variant: {
		description: 'Choose a variant to select predefined button colors',
		type: { name: 'string' },
	},
	disabled: {
		type: { name: 'boolean' },
		table: {
			type: { summary: 'bool' },
			defaultValue: { summary: false },
		},
	},
}
