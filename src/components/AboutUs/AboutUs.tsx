'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import { Section } from '../Section/Section'

import { useWhoWeAreStore } from '@/store/store'

import styles from './AboutUs.module.scss'

const AboutUsSection = () => {
	const { aboutUs, fetchAboutUs } = useWhoWeAreStore(state => state)

	useEffect(() => {
		fetchAboutUs()
	}, [fetchAboutUs])

	return (
		<Section title='Хто ми'>
			<div className={styles.introductory}>
				<p>
					Усі агенції схожі: працюють в стандартних рекламних кабінетах, роблять
					подібні налаштування і точно не можуть вигадати велосипед.
				</p>
				<p className={styles.boldText}>То чому вам треба обрати нас серед усіх інших?</p>
			</div>
			<ul className={styles.list}>
				{aboutUs.map(item => (
					<li className={styles.item} key={item.id}>
						<div className={styles.itemTextWrapper}>
							<h5 className={styles.itemCaption}>{item.title}</h5>
							<p className={styles.itemText}>{item.description}</p>
						</div>
						<Image
							className={styles.aboutItemImg}
							src={item.image.imagePath}
							alt={item.image.description}
							width={300}
							height={176}
						/>
					</li>
				))}
			</ul>
		</Section>
	)
}
export default AboutUsSection
