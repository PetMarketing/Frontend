'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Section } from '@/components/Section/Section'
import EventCard from '@/components/EventCard/EventCard'

import eventsSign from '@/assets/eventSign.png'

// import { useEventsStore } from '@/store/store'

import styles from './Events.module.scss'
import { IEvent } from '@/types/IEvent'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const Events = () => {
	const [events, setEvents] = useState<IEvent[]>([])
	const [loading, setLoading] = useState(false)

	const fetchEvents = async () => {
		try {
			setLoading(true)
			const response = await fetch(`${apiKey}/event`, {
				method: 'GET',
				next: { revalidate: 5000 },
			})

			const data = await response.json()
			setEvents(data)
		} catch (error) {
			setLoading(false)
			console.log(error)
		} finally {
			setLoading(false)
		}
	}
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
						<h3>онлайн та офлайн</h3>
					</div>
				</div>
				<div className={styles.eventsBlock}>
					{loading ? (
						<div>Loading...</div>
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
