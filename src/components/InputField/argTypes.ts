import { ArgTypes } from '@storybook/react'
import { InputFieldProps } from './types'

export const argTypes: Partial<ArgTypes<InputFieldProps>> = {
	disabled: {
		table: {
			type: { summary: 'bool' },
			defaultValue: { summary: false },
		},
		type: { name: 'boolean' },
	},

	error: {
		table: {
			type: { summary: 'string' },
		},
		type: { name: 'string' },
	},

	helper: {
		table: {
			type: { summary: 'string' },
		},
		type: { name: 'string' },
	},

	icon: {
		table: {
			type: { summary: ' ReactNode' },
		},
	},

	label: {
		table: {
			type: {
				summary: 'string',
			},
		},
		type: { name: 'string' },
	},

	name: {
		table: {
			type: {
				summary: 'string',
			},
		},
		description:
			'Ariakit Form component requires the input field to have a unique name',
		type: { name: 'string', required: true },
	},

	placeholder: {
		table: {
			type: {
				summary: 'string',
			},
		},
		type: { name: 'string' },
	},

	type: {
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'text' },
		},
	},
}
