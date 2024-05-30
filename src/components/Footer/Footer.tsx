import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Section } from '@/components/Section/Section'
import Button from '@/components/Button/Button'

import logoFooter from '@/assets/logoFooter.svg'
import Instagram from '@/assets/svg/instagram-icon'
import TelegramIcon from '@/assets/svg/telegram-icon'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footer}>
				<Image className={styles.logo} src={logoFooter} alt='logo' />
				<div className={styles.socials}>
					<Link href='https://t.me/' target='_blank'>
						<TelegramIcon />
					</Link>
					<Link href='https://www.instagram.com' target='_blank'>
						<Instagram />
					</Link>
				</div>
				<div className={styles.contacts}>
					<h2>Contacts</h2>
					<Link href='mailto:ourchat33@gmail.com'>
						ourchat33@gmail.com
					</Link>
					<br />
					<Link href='tel:+380958500287'>+380958500287</Link>
				</div>
				<div className={styles.withUs}>
					<h5>Let's do it together!</h5>
					<Link href='/brief' className={styles.primaryFooterLink}>
						Order
					</Link>
					<br />
					<Link href='/team' className={styles.primaryFooterLink}>
						Join the Team
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
