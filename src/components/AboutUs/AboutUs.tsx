import Image from 'next/image'

import { Section } from '../Section/Section'

import { getAboutUs } from '@/services/fetchData';

import styles from './AboutUs.module.scss'

const AboutUsSection = async () => {
	const aboutUs = await getAboutUs();

	return (
		<Section title='Who we are'>
			<div className={styles.introductory}>
				<p>
					All agencies are alike: they work in standard advertising offices, make similar setups, and certainly can't reinvent the wheel.
				</p>
				<p className={styles.boldText}>
					So why should you choose us among all the others?
				</p>
			</div>
			{!aboutUs.length ? (
				<p>No results found</p>
			) : (
				<ul className={styles.list}>
					{aboutUs.map((item) => (
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
