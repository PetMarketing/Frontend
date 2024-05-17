import Button from '@/components/Button/Button'

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
						<h2 className={dela.className}>{event.name}</h2>
					</div>
					<div className={styles.speakers}>
						{event.speakers.map(speaker => (
							<div key={speaker.id}>
								<Flower fill={speaker.image.imagePath} />
								<div>{speaker.name}</div>
							</div>
						))}
						<Button variant='primary' className={styles.greenBtn}>
							Детальніше
						</Button>
					</div>
				</div>
			) : (
				<div className={styles.laterEvent}>
					<div className={styles.header}>
						<h5>{event.date}</h5>
						<h5>{event.location}</h5>
					</div>
					<h2 className={`${styles.eventTitleName} ${dela.className}`}>
						Котики у місті
					</h2>
					<Button variant='primary' className={styles.button}>
						Детальніше
					</Button>
				</div>
			)}
		</>
	)
}

export default EventCard
