import NewEventForm from '../components/NewEventForm/NewEventForm'
import styles from './page.module.scss'

export default function EventsPage() {
	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Event</h3>

			<h3 className={styles.title}>Add new event</h3>

			<div className={styles.addNewEvent}>
				<NewEventForm />
			</div>
		</div>
	)
}