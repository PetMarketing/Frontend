import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { getClsNames } from '@/utils/helpers'

import styles from './ButtonLink.module.scss'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: React.ReactNode
	href: string;
	className?: string
	variant?: 'primary' | 'menu' | 'category' | 'primarySquare'
	active?: boolean
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
	children,
	href,
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
		case 'primarySquare':
			baseClassName = styles.primarySquareBtn
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
		<Link
			href={href}
			className={getClsNames(baseClassName, [className], mods)}
			{...rest}
		>
			{children}
		</Link>
	)
}

export default ButtonLink
