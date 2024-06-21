import Accordion from '../Accordion/Accordion'
import FormCreateBlock from './FormCreateBlock/FormCreateBlock'

import { getAboutUs } from '@/services/fetchData'
// import { blockData, blockListItems } from './TestData'

import styles from './AboutUs.module.scss'

const AboutUs = async () => {
	const aboutUs = await getAboutUs()

	return (
		<section className={styles.pageSection}>
			<h1 className={styles.title}>About us</h1>
			<h2 className={styles.title}>Creating a new block</h2>
			<FormCreateBlock />
			<h2>Editing a block</h2>

			<Accordion
				columns={['id', 'title']}
				blockListItems={aboutUs}
				blockData={aboutUs}
			/>
		</section>
	)
}

export default AboutUs
