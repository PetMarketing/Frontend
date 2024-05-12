'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Section } from '../Section/Section'

// import { useWhoWeAreStore } from '@/store/store'

import styles from './AboutUs.module.scss'

import { IAboutUs } from '@/types/IAboutUs'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const AboutUsSection = () => {
	const [aboutUs, setAboutUs] = useState<IAboutUs[]>([])
	const [loading, setLoading] = useState(false)

	const fetchAboutUs = async () => {
		try {
			setLoading(true)
			const response = await fetch(`${apiKey}/who-we-are`, {
				method: 'GET',
				next: { revalidate: 5000 },
			})

			const data = await response.json()
			setAboutUs(data)
		} catch (error) {
			setLoading(false)
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchAboutUs()
	}, [])

	return (
		<Section title='Хто ми'>
			<div className={styles.introductory}>
				<p>
					Усі агенції схожі: працюють в стандартних рекламних кабінетах, роблять
					подібні налаштування і точно не можуть вигадати велосипед.
				</p>
				<p className={styles.boldText}>
					То чому вам треба обрати нас серед усіх інших?
				</p>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<ul className={styles.list}>
					{aboutUs.map((item: IAboutUs) => (
						<li className={styles.item} key={item.id}>
							<div className={styles.itemTextWrapper}>
								<h5 className={styles.itemCaption}>{item.title}</h5>
								<p className={styles.itemText}>{item.description}</p>
							</div>
							<Image
								className={styles.aboutItemImg}
								src={item.image.imagePath}
								alt={item.image.description}
								width={634}
								height={374}
							/>
						</li>
					))}
				</ul>
			)}
		</Section>
	)
}
export default AboutUsSection
