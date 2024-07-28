import Image from 'next/image';

import styles from './Header.module.scss';

export default async function Header() {
	const session = undefined;

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

