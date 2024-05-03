import React from 'react'
import Link from 'next/link'

import { Section } from '@/components/Section/Section'
import Logo from '@/components/Logo/Logo'

import ArrowLeft from '@/assets/svg/arrow-left'

import styles from './Header.module.scss'

interface Props {
	page: string
}
const Header: React.FC<Props> = ({ page }) => {
	return (
		<Section className={styles.header}>
			<Logo size='small' />
			<div className={styles.navMenu}>
				<Link href='/'>Головна</Link> <ArrowLeft /> <span>{page}</span>
			</div>
		</Section>
	)
}

export default Header
