import Accordion from '../components/accordion';
import AboutUsForm from '@/app/dashboard/components/about-us-form'

import { getAboutUs } from '@/services/fetchData'

import styles from './page.module.scss'

export default async function AboutUsPage() {
	const aboutUs = await getAboutUs()

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>About Us</h3>

			<h3 className={styles.title}>Add new block</h3>

			<div className={styles.addNewBlock}>
				<AboutUsForm />
			</div>

			<Accordion columns={['id', 'title']} data={aboutUs} form={<AboutUsForm />} />
		</div>
	)
}
