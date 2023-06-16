import type { Meta, StoryObj } from '@storybook/react'
import { TagProps } from '../src/types'
import Tag from '../src/Tag'

const meta: Meta<TagProps> = {
	title: 'Components/Tag',
	component: Tag,
	argTypes: {
		color: {
			control: { type: 'color' },
		},
		backgroundColor: {
			control: { type: 'color' },
		},
		borderColor: {
			control: { type: 'color' },
		},
	},
} satisfies Meta<TagProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Front-end',
	},
}

export const CustomColors: Story = {
	args: {
		children: 'Front-end',
		color: 'rgb(255, 242, 0)',
		backgroundColor: 'rgba(154, 0, 0, 0.412)',
		borderColor: 'rgb(255, 0, 0)',
	},
}
