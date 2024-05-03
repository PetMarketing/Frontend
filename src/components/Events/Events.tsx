'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

import { Section } from '@/components/Section/Section'
import EventCard from '@/components/EventCard/EventCard'

import eventsSign from '@/assets/eventSign.png'

import { useEventsStore } from '@/store/store'

import styles from './Events.module.scss'

const Events = () => {
	const { events, fetchEvents } = useEventsStore(state => state)

	useEffect(() => {
		fetchEvents()
	}, [])

	return (
		<Section title='Івенти' className={styles.eventsWrapper}>
			<h3>для маркетологів та підприємців</h3>
			<div className={styles.events}>
				<div className={styles.imageBlock}>
					<Image src={eventsSign} alt='event sing' />
					<div>
						<h3>конференції</h3>
						<h3>вечірки</h3>
						<h3>вебінари</h3>
						<h3>онлайн та офлай</h3>
					</div>
				</div>
				<div className={styles.eventsBlock}>
					{events.map((e, i) => (
						<EventCard
							event={e}
							key={e.id}
							variant={i === 0 ? 'soonest' : 'later'}
							style={{ gridArea: 'soonest' }}
						/>
					))}
				</div>
			</div>
		</Section>
	)
}

export default Events
