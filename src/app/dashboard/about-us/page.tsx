import { getServerSession } from 'next-auth';

import NewAboutUsBlockForm from '../components/NewAboutUsBlockForm/NewAboutUsBlockForm';
import Accordion from '../components/Accordion/Accordion';

import { getAboutUs } from '@/services/fetchData'

import { authConfig } from '@/config/auth';


import styles from './page.module.scss'

export default async function AboutUsPage() {
	const session = await getServerSession(authConfig);
	const aboutUs = await getAboutUs()

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>About Us</h3>

			<h3 className={styles.title}>Add new block</h3>

			<div className={styles.addNewBlock}>
				<NewAboutUsBlockForm session={session} />
			</div>

			<Accordion
				columns={['id', 'title']}
				blockListItems={aboutUs}
				blockData={aboutUs}
			/>
		</div>
	)
}
