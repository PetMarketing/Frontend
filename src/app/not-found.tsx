import Image from 'next/image'
import Link from 'next/link'

import notFoundIcon from '@/assets/images/404-not-found.svg'

import styles from './not-found.module.scss'
import btnStyles from '@/components/Button/Button.module.scss'
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'

export default function NotFound() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapperLogoBox}>
					<Header page='Not-Found'></Header>
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
						Return to Main
					</Link>
				</div>
				<Menu />
			</div>
		</>
	)
}
