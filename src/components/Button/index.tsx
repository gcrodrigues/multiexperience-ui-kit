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
		() => (variant ? `uk-button--${variant}` : `uk-button--default `),
		[variant],
	)

	const buttonClassName = useMemo(
		() =>
			classNames(
				{
					'uk-button--disabled': disabled,
				},
				selectedVariant,
				'uk-button',
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
