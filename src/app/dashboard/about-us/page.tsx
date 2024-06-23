import { getServerSession } from 'next-auth';

import { authConfig } from '@/config/auth';

import NewAboutUsBlockForm from '../components/NewAboutUsBlockForm/NewAboutUsBlockForm';

import styles from './page.module.scss'

export default async function AboutUsPage() {
	const session = await getServerSession(authConfig);

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>About Us</h3>

			<h3 className={styles.title}>Add new block</h3>

			<div className={styles.addNewBlock}>
				<NewAboutUsBlockForm session={session} />
			</div>
		</div>
	)
}
