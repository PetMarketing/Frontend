import Image from 'next/image';
import { getServerSession } from 'next-auth'

import { authConfig } from '@/config/auth'
import styles from './Header.module.scss';

export default async function Header() {
	const session = await getServerSession(authConfig);

	return (
		<header className={styles.header}>
			<div className={styles.userInfo}>
				<div className={styles.imageWrapper}>
					<Image src='/default-avatar.svg' width={80} height={80} alt='avatar' className={styles.image} />
				</div>

				<div className={styles.infoWrapper}>
					<div className={styles.name}>{session?.user?.name}</div>
					<div className={styles.role}>{session?.user?.role}</div>
				</div>
			</div>
		</header>
	)
}

