import React, { useCallback, useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { SelectProps } from './types'
import Select from '.'
import { Form, useFormStore } from '@ariakit/react'
import { Search, Trash } from 'react-feather'
import { argTypes } from './argTypes'

const withForm = (
	Story: React.ComponentType<SelectProps>,
	context: { args: SelectProps },
) => {
	const form = useFormStore({})

	return (
		<Form store={form} style={{ width: '260px' }}>
			<Story {...context.args} />
		</Form>
	)
}

const SelectComponent = (args: SelectProps) => {
	const [inputValue, setInputValue] = useState<string | string[] | undefined>()

	const selectedItemData = useMemo(() => {
		return args.items.filter(item => {
			return inputValue?.includes(item[args.renderValue])
		})
	}, [inputValue])

	console.log(selectedItemData)

	const handleSelectItem = useCallback((selectedItem: string[] | string) => {
		if (Array.isArray(inputValue)) {
			const filtered = args.items.filter(item =>
				inputValue.includes(item[args.renderValue]),
			)
			setInputValue(filtered)
		}

		setInputValue(selectedItem)
	}, [])

	return <Select {...args} value={inputValue} onChange={handleSelectItem} />
}

const fruits = [
	{ value: 'Apple' },
	{ value: 'Pineapple' },
	{ value: 'Blueberry' },
	{ value: 'Peach' },
	{ value: 'Passionfruit' },
	{ value: 'Grape' },
	{ value: 'Strawberry' },
	{ value: 'Watermelon' },
]

const roles = [
	{ value: 'Admin' },
	{ value: 'Secretary' },
	{ value: 'Teacher' },
	{ value: 'Parent' },
	{ value: 'Principal' },
	{ value: 'Student' },
	{ value: 'Employee' },
]

const meta: Meta<SelectProps> = {
	title: 'Components/Select',
	component: SelectComponent,
	decorators: [withForm],
	argTypes,
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		items: fruits,
		matchKeys: ['value'],
		renderValue: 'value',
		label: 'Select your favorite fruit',
		placeholder: 'Placeholder',
	},
	parameters: {
		docs: { story: { inline: false, height: '400px' } },
	},
}

export const Multiple: Story = {
	args: {
		items: fruits,
		matchKeys: ['value'],
		renderValue: 'value',
		placeholder: 'Select an option',
		label: 'Select your favorite fruit',
		helper: 'Eat fruits!',
		multiple: true,
	},
	parameters: {
		docs: { story: { inline: false, height: '400px' } },
	},
}

export const Error: Story = {
	args: {
		items: roles,
		inputSearch: true,
		matchKeys: ['value'],
		renderValue: 'value',
		rightIcon: <Search />,
		placeholder: 'Select user roles',
		error: 'Select at least one fruit',
	},
	parameters: {
		docs: { story: { inline: false, height: '400px' } },
	},
}

export const Disabled: Story = {
	args: {
		items: roles,
		multiple: true,
		inputSearch: true,
		matchKeys: ['value'],
		renderValue: 'value',
		rightIcon: <Search />,
		placeholder: 'Select user roles',
		disabled: true,
	},
}
