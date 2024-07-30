import Image from 'next/image';

import { getSession } from '@/services/auth/auth.service';

import styles from './Header.module.scss';

export default async function Header() {
	const session = await getSession();

	const avatarSrc = session.user.imagePath ? session.user.imagePath : '/default-avatar.svg';

	return (
		<header className={styles.header}>
			<div className={styles.userInfo}>
				<div className={styles.imageWrapper}>
					<Image src={avatarSrc} width={80} height={80} alt='avatar' className={styles.image} />
				</div>
				<div className={styles.infoWrapper}>
					<div className={styles.name}>{session.user.name}</div>
					<div className={styles.role}>{session.user.role}</div>
				</div>
			</div>
		</header>
	)
}

