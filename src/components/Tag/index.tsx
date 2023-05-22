import React from 'react'
import './styles.css'
import { TagProps } from './types'
import { X } from 'react-feather'

export default function Tag({
	children,
	onClick,
	color,
	borderColor,
	backgroundColor,
}: TagProps) {
	const style = {
		color: `${color && color}`,
		backgroundColor: `${backgroundColor && backgroundColor}`,
		borderColor: `${borderColor && borderColor}`,
	}

	return (
		<button
			style={color || borderColor ? style : undefined}
			className="mx-tag"
			onClick={onClick}
		>
			<p className="mx-tag__text">{children}</p>
			<span className="mx-tag__button" onClick={onClick}>
				<X size={12} />
			</span>
		</button>
	)
}
