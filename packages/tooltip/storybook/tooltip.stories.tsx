import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from '../src/Tooltip'
import { TooltipProps } from '../src/types'
import { Button } from '../../button/src'

const TooltipComponent = (args: TooltipProps) => {
	return <Tooltip {...args}>{args.children}</Tooltip>
}

const meta: Meta<TooltipProps> = {
	title: 'Components/Tooltip',
	component: TooltipComponent,
	argTypes: {
		message: {
			table: { type: { summary: 'string' } },
			type: { name: 'string', required: true },
		},
		children: {
			type: { name: 'string', required: true },
			control: { type: 'object' },
		},
	},
} satisfies Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		message: 'Hi there! 👋🏼',
		children: <Button variant="primary">Hover or Focus</Button>,
	},
}
