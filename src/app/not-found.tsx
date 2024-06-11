import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/components/Logo/Logo'

import notFoundIcon from '@/assets/images/404-not-found.svg'

import styles from './not-found.module.scss'
import btnStyles from '@/components/Button/Button.module.scss'

export default function NotFound() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapperLogoBox}>
					<Logo size='small' />
				</div>

				<div className={styles.wrapperNotFound}>
					<Image
						className={styles.notFoundIcon}
						src={notFoundIcon}
						alt='not-found-icon'
						width={617}
						height={213}
						priority
					/>
					<Link href='/' className={`${btnStyles.primaryBtn} ${styles.linkToMain}`}>
						Повернутися на Головну
					</Link>
				</div>
			</div>
		</>
	)
}
