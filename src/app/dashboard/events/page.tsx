import Accordion from '../components/accordion';
import NewEventForm from '../components/NewEventForm/NewEventForm'

import { getEvents } from '@/services/fetchData';

import styles from './page.module.scss'

export default async function EventsPage() {
	const events = await getEvents()

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Event</h3>

			<h3 className={styles.title}>Add new event</h3>

			<div className={styles.addNewEvent}>
				<NewEventForm />
			</div>

			{/* <Accordion columns={['id', 'name', 'location', 'date']} data={events} /> */}
		</div>
	)
}
