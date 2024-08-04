import Accordion from '../components/accordion';

import { getServices } from '@/services/fetchData'

import styles from './page.module.scss'

export default async function ServicesPage() {
	const services = await getServices()

	const formattedServices = services.map(item => ({
		id: item.id,
		title: item.title,
		category: item.category.name
	}));

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>About Us</h3>

			<h3 className={styles.title}>Add new block123</h3>

			<div className={styles.addNewBlock}>
				AddNewBlock
			</div>

			{/* <Accordion columns={['id', 'title', 'category']} data={formattedServices} /> */}
		</div>
	)
}
