import React from 'react'
import Image from 'next/image'

import { Section } from '../Section/Section'

import heroImg from '@/assets/images/hero-photo.jpg'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<Section title='HELLO, City residents!' useH1>
			<div className={styles.contentWrapper}>
				<p>We're a marketing agency that truly cares:</p>
				<ul className={styles.list}>
					<li>
						<p>about your business and its prosperity</p>
					</li>
					<li>
						<p>about the ROI of advertising</p>
					</li>
					<li>
						<p>about how you feel working with us</p>
					</li>
				</ul>
				<div className={styles.text}>
					<p>We're building city marketing,</p>
					<p>where you want to settle down, not just pass by.</p>
				</div>
				<Image
					className={styles.heroImg}
					src='/hero-img.jpg'
					alt='hero-img'
					width={745}
					height={632}
					priority
				/>
			</div>
		</Section>
	)
}

export default HeroSection
