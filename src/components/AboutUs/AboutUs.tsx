import Image from 'next/image'

import { Section } from '../Section/Section'

import { getAboutUs } from '@/services/fetchData';

import styles from './AboutUs.module.scss'

const AboutUsSection = async () => {
	const aboutUs = await getAboutUs();

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
			{!aboutUs.length ? (
				<p>Нічого не знайдено</p>
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
