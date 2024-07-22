import Image from 'next/image'
import { notFound } from 'next/navigation'

import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import { Section } from '@/components/Section/Section'
import InfoLabel from '@/components/InfoLabel/InfoLabel'
import EventForm from '@/components/EventForm/EventForm'
import Events from '@/components/Events/Events'
import Footer from '@/components/Footer/Footer'

import { getEvents } from '@/services/fetchData'

import { getClsNames } from '@/utils/helpers'

import { IEvent } from '@/types/IEvent'

import { dela } from '@/styles/fonts/fonts'

import Flower from '@/assets/svg/flower'
import bird from '@/assets/images/bird.png'

import styles from './page.module.scss'

type Props = {
	params: {
		id: string
	}
}

export default async function EventPage({ params: { id } }: Props) {
	const events = await getEvents();

	const findEventById = (id: number): IEvent | undefined => {
		return events.find(event => event.id === id);
	};

	const event = findEventById(Number(id));

	if (!event) {
		notFound();
	}

	return (
		<main>
			<Header page={event.name}></Header>
			<Menu />
			<Section className={styles.section}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h2 className={getClsNames(styles.title, [dela.className])}>{event.name}</h2>

						<div className={styles.description}>
							<p>
								We have created a website with a diverse team, including juniors, teammates working at other companies, mentors, and participants from the first team that completed a project on the Team Challenge platform
							</p>
						</div>

						<div className={styles.info}>
							<InfoLabel color='blue' type='date' content={event.date} />
							<InfoLabel color='white' type='location' content={event.location} />
						</div>

						<div className={styles.speakers}>
							<h3 className={getClsNames(styles.title, [dela.className])}>speakers</h3>

							<div className={styles.speakersWrapper}>
								{event.speakers.map(speaker => (
									<div className={styles.speaker} key={speaker.id}>
										<Flower fill={speaker.imagePath} />
										<div className={styles.speakerName}>{speaker.imageAlt}</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className={styles.form}>
						<div className={styles.img}>
							<Image src={bird} alt='bird' />
						</div>

						<div className={styles.eventForm}>
							<EventForm eventId={id} />
						</div>
					</div>
				</div>
			</Section>
			<Events />
			<Footer />
		</main >
	)
}
