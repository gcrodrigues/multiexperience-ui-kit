import { ArgTypes } from '@storybook/react'
import { SelectProps } from '../src/types'

export const argTypes: Partial<ArgTypes<SelectProps>> = {
	clearInputButtonText: {
		description: 'Text for remove all selected tags button',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'Clear' },
		},
		type: { name: 'string' },
	},

	comboboxPlaceholder: {
		description: 'Placeholder for search box inside popover',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'Search' },
		},
		type: { name: 'string' },
	},

	defaultValue: {
		table: {
			type: { summary: ['string ', ' string[]'] },
		},
	},

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

	inputSearch: {
		description: 'Enable input search inside popover',
		table: {
			type: { summary: 'bool' },
			defaultValue: { summary: 'false' },
		},
		type: { name: 'boolean' },
	},

	items: {
		table: { type: { summary: 'any[]' } },
		//was set to type string due to an error recognizing the field type
		type: { name: 'string', required: true },
		//to solve the previous problem that the component is of type string,
		//the control input type has been changed
		control: { type: 'array' },
	},

	label: {
		table: { type: { summary: 'string' } },
		type: { name: 'string' },
	},

	matchKeys: {
		description: 'When inputSeach is true and your object has many properties',
		table: {
			type: { summary: 'bool' },
			defaultValue: { summary: false },
		},
		type: { name: 'boolean' },
	},

	multiple: {
		table: {
			type: { summary: 'bool' },
			defaultValue: { summary: false },
		},
		type: { name: 'boolean' },
	},

	onChange: {
		table: {
			type: { summary: '(item: string[] | string) => void)' },
		},
		type: { name: 'function' },
		control: { type: 'function' },
	},

	placeholder: {
		table: { type: { summary: 'string' } },
		type: { name: 'string' },
	},

	renderValue: {
		description:
			'In case the object passed have many properties, define the one that will be displayed',
		table: {
			type: {
				summary: 'string',
			},
		},
		type: { name: 'string' },
	},

	rightIcon: {
		table: {
			type: { summary: ' ReactNode' },
		},
	},
}
