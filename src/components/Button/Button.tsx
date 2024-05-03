import React, { ButtonHTMLAttributes } from 'react'

import { getClsNames } from '@/utils/helpers'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	variant?: 'primary' | 'menu' | 'category'
	active?: boolean
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
	variant,
	active,
	...rest
}) => {
	let baseClassName
	let mods = {}

	switch (variant) {
		case 'primary':
			baseClassName = styles.primaryBtn
			break
		case 'menu':
			baseClassName = styles.menuBtn
			mods = { [styles.active]: active }
			break
		case 'category':
			baseClassName = styles.categoryBtn
			mods = { [styles.active]: active }
			break
		default:
			baseClassName = styles.primaryBtn
	}
	return (
		<button
			className={getClsNames(baseClassName, [className], mods)}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
