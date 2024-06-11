import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logoIcon from '@/assets/images/logo.svg'

import styles from './Logo.module.scss'

interface Props {
	size: 'small' | 'large'
}

const Logo: React.FC<Props> = ({ size }) => {
	return (
		<div className={size === 'large' ? styles.logoLarge : styles.logoSmall}>
			<Link href='/'>
				<Image src={logoIcon} alt='logo-icon' width={356} height={87} priority />
			</Link>
		</div>
	)
}

export default Logo
