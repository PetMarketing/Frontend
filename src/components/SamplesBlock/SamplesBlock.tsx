'use client'

import React, { useEffect, useState } from 'react'
import styles from './SamplesBlock.module.scss'
import { Section } from '@/components/Section/Section'
import Sample from '@/components/Sample/Sample'
import Button from '@/components/Button/Button'
import { useSamplesStore } from '@/store/store'
import Loader from '@/components/Loader/Loader'

const samplesCategories = [
	'Digital-просування',
	'Cтратегічний маркетинг',
	'Онлайн-присутність',
]

const SampleBlock = () => {
	const { samples, fetchSamples, loading } = useSamplesStore(state => state)

	const [displayedSamples, setDisplayedSamples] = useState(2)
	const [selectedCategory, setSelectedCategory] = useState(samplesCategories[0])

	useEffect(() => {
		fetchSamples(selectedCategory)
	}, [selectedCategory])

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category)
	}

	const handleShowMoreSamples = () => {
		setDisplayedSamples(prevCount => prevCount + 1)
	}
	return (
		<Section title='і одразу шо coooool зробили'>
			<ul className={styles.categories}>
				{samplesCategories.map((category, index) => (
					<li key={index}>
						<Button
							variant='category'
							active={category === selectedCategory}
							onClick={() => handleCategoryClick(category)}
						>
							{category}
						</Button>
					</li>
				))}
			</ul>
			{loading ? <Loader /> : (<div className={styles.samples}>
				{samples.length === 0 ? <div className={styles.noCases}>No current cases</div> :
					(samples.slice(0, displayedSamples).map(sample => (
						<Sample sample={sample} key={sample.id} />
					)))
				}
				{displayedSamples < samples.length && (
					<Button
						className={styles.moreBtn}
						variant='primary'
						onClick={handleShowMoreSamples}
					>
						Ще кейси
					</Button>
				)}
			</div>)
			}
		</Section>
	)
}

export default SampleBlock
