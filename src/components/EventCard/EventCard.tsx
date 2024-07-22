import ButtonLink from '../ButtonLink/ButtonLink'

import { IEvent } from '@/types/IEvent'

import Flower from '@/assets/svg/flower'

import { dela } from '@/styles/fonts/fonts'

import styles from './EventCard.module.scss'

interface Props {
	event: IEvent
	variant: 'soonest' | 'later'
	style?: React.CSSProperties
}

const EventCard: React.FC<Props> = ({ event, variant, style }) => {
	return (
		<>
			{variant === 'soonest' ? (
				<div className={styles.newEvent} style={style}>
					<div className={styles.header}>
						<h5>{event.date}</h5>
						<h5>{event.location}</h5>
						<h2 className={`${dela.className} ${styles.title}`}>{event.name}</h2>
					</div>
					<div className={styles.speakers}>
						{event.speakers.map(speaker => (
							<div key={speaker.id}>
								<Flower fill={speaker.imagePath} />
								<div className={styles.speakerName}>{speaker.imageAlt}</div>
							</div>
						))}
						<ButtonLink href={`/event/${event.id.toString()}`} variant='primary' className={styles.greenBtn}>
							Read More
						</ButtonLink>
					</div>
				</div>
			) : (
				<div className={styles.laterEvent}>
					<div className={styles.header}>
						<h5 className={styles.infoTitle}>{event.date}</h5>
						<h5 className={styles.infoTitle}>{event.location}</h5>
					</div>
					<h2 className={`${dela.className} ${styles.title}`}>
						{event.name}
					</h2>
					<ButtonLink href={`/event/${event.id.toString()}`} variant='primary' className={styles.button}>
						Read More
					</ButtonLink>
				</div>
			)}
		</>
	)
}

export default EventCard
