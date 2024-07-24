import { getServerSession } from 'next-auth';

import Accordion from '../components/accordion';
import NewEventForm from '../components/NewEventForm/NewEventForm'

import { getEvents } from '@/services/fetchData';

import { authConfig } from '@/config/auth';

import styles from './page.module.scss'

export default async function EventsPage() {
	const session = await getServerSession(authConfig);
	const events = await getEvents()

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Event</h3>

			<h3 className={styles.title}>Add new event</h3>

			<div className={styles.addNewEvent}>
				<NewEventForm session={session} />
			</div>

			<Accordion columns={['id', 'name', 'location', 'date']} data={events} />
		</div>
	)
}