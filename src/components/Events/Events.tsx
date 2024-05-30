import Image from 'next/image'

import { Section } from '@/components/Section/Section'
import EventCard from '@/components/EventCard/EventCard'
import NoResultsFound from '../NoResultsFound/NoResultsFound'

import { getEvents } from '@/services/fetchData'

import eventsSign from '@/assets/eventSign.png'

import styles from './Events.module.scss'

const Events = async () => {
	const events = await getEvents();

	return (
		<Section title='Events' className={styles.eventsWrapper}>
			<h3>For marketers and entrepreneurs </h3>
			<div className={styles.events}>
				<div className={styles.imageBlock}>
					<Image src={eventsSign} alt='event sing' />
					<div>
						<h3>Conferences</h3>
						<h3>Parties</h3>
						<h3>Webinars</h3>
						<h3>Online and offline</h3>
					</div>
				</div>
				<div className={styles.eventsBlock}>
					{!events.length ? (
						<NoResultsFound />
					) : (
						events.map((e, i) => (
							<EventCard
								event={e}
								key={e.id}
								variant={i === 0 ? 'soonest' : 'later'}
								style={{ gridArea: 'soonest' }}
							/>
						))
					)}
				</div>
			</div>
		</Section>
	)
}

export default Events
