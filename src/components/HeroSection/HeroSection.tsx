import React from 'react'
import Image from 'next/image'

import { Section } from '../Section/Section'

import heroImg from '@/assets/images/hero-photo.jpg'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<Section title='Привіт, містяни!' useH1>
			<div className={styles.contentWrapper}>
				<p>Ми — маркетингова агенція, якій не пофіг:</p>
				<ul className={styles.list}>
					<li>
						<p>на ваш бізнес та його процвітання</p>
					</li>
					<li>
						<p>на окупність реклами</p>
					</li>
					<li>
						<p>на те, як ви почуваєтеся в співпраці з нами</p>
					</li>
				</ul>
				<div className={styles.text}>
					<p>Ми будуємо misto маркетингу,</p>
					<p>де хочеться оселитися, а не проїхати повз.</p>
				</div>
				<Image
					className={styles.heroImg}
					src={heroImg}
					alt='hero-img'
					width={300}
					height={274}
					priority
				/>
			</div>
		</Section>
	)
}

export default HeroSection
