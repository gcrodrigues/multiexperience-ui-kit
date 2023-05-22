import type { Meta, StoryObj } from '@storybook/react'

import { argTypes } from './argTypes'
import Button from '../Button'
import { ButtonProps, OVariants } from './types'

const meta: Meta<ButtonProps> = {
	title: 'Components/Button',
	component: Button,
	argTypes,
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
	args: {
		children: 'Choose the variation below',
		variant: OVariants.Default,
	},
}

export const Disabled: Story = {
	args: {
		children: 'Button disabled',
		variant: OVariants.Primary,
		disabled: true,
	},
}
