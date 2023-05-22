import React, { useMemo } from 'react'
import './styles.css'
import classNames from 'classnames'
import { ButtonProps, OVariants } from './types'

export default function Button({
	children,
	className,
	disabled,
	variant = OVariants.Default,
	onClick,
}: ButtonProps) {
	const selectedVariant = useMemo(
		() => (variant ? `mx-button--${variant}` : `mx-button--default `),
		[variant],
	)

	const buttonClassName = useMemo(
		() =>
			classNames(
				{
					'mx-button--disabled': disabled,
				},
				'mx-button',
				selectedVariant,
				className,
			),
		[className, variant, disabled, selectedVariant],
	)

	return (
		<button disabled={disabled} className={buttonClassName} onClick={onClick}>
			{children}
		</button>
	)
}
