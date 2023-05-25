import React, { useContext } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '../../src/components/Button'
import { MultiexperienceContext } from './MultiexperienceContext'

const ButtonComponent = () => {
	const { setDarkMode } = useContext(MultiexperienceContext)
	return <Button onClick={setDarkMode}>Switch Theme</Button>
}

const meta = {
	title: 'Provider/MultiexperienceProvider',
	component: ButtonComponent,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Password: Story = {
	args: {},
}
