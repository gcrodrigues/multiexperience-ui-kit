import React, { useMemo, useState } from 'react'
import { FormInput, FormLabel } from '@ariakit/react'
import { InputFieldProps } from '../types'
import { Info, Eye, EyeOff } from 'react-feather'
import './styles.css'
import { Tooltip } from '@mx-ui/tooltip'
import classNames from 'classnames'

export default function InputField(props: InputFieldProps) {
	const {
		className,
		disabled = false,
		error,
		icon,
		label,
		name,
		type,
		helper,
		value,
		onFocus,
	} = props
	const [isVisible, setIsVisible] = useState(false)

	const inputType = useMemo(
		() => (type === 'password' ? (isVisible ? 'text' : 'password') : type),
		[isVisible, type],
	)

	const headerClassNames = useMemo(
		() =>
			classNames(
				{
					'mx-header--marginBottom': label || helper,
				},
				'mx-header',
			),
		[label, helper],
	)

	const inputClassNames = useMemo(
		() =>
			classNames(
				{
					'mx-input--disabled': disabled,
					'mx-input--error': error,
				},
				'mx-input',
				className,
			),
		[disabled, error],
	)
	const inputLeftIconClassNames = useMemo(
		() => classNames('mx-input__left__icon', className),
		[disabled],
	)

	const toggleShowPassword = () => {
		setIsVisible(!isVisible)
	}

	return (
		<div className="mx-container">
			<div className={headerClassNames}>
				{label && (
					<FormLabel className="mx-header__label" name={name}>
						{label}
					</FormLabel>
				)}
				{helper && (
					<Tooltip message={helper}>
						<Info size={14} className="mx-header__info" />
					</Tooltip>
				)}
			</div>
			<div className={inputClassNames}>
				{icon && <div className={inputLeftIconClassNames}>{icon}</div>}
				<FormInput
					{...props}
					onFocus={onFocus}
					type={inputType}
					className="mx-input__field"
					disabled={disabled}
					value={value}
				/>
				{type === 'password' && (
					<button
						className="mx-input__button"
						onClick={toggleShowPassword}
						disabled={disabled}
					>
						{isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				)}
			</div>
			{error && <span className="mx-error">{error}</span>}
		</div>
	)
}
