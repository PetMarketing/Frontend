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
					<Link href='https://t.me/misto_marketing' target='_blank'>
						<TelegramIcon />
					</Link>
					<Link
						href='https://www.instagram.com/misto_agency?igsh=cDU1cGVtMWozcWlv>'
						target='_blank'
					>
						<Instagram />
					</Link>
				</div>
				<div className={styles.contacts}>
					<h2>Контакти</h2>
					<Link href='mailto:creative.misto@gmail.com'>
						creative.misto@gmail.com
					</Link>
					<br />
					<Link href='tel:+380958500287'>+380958500287</Link>
				</div>
				<div className={styles.withUs}>
					<h5>Давай з нами!</h5>
					<Button variant='primary'>Замовити</Button>
					<br />
					<Button variant='primary'>Хочу у вашу тім</Button>
				</div>
				<div className={styles.legacy}>
					<h6>Договір публічної оферти</h6>
					<div>
						<p>Дизайнери ____________</p>
						<p>Розробники __________</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
