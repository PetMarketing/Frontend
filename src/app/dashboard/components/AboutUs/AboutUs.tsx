import Accordion from '../Accordion/Accordion'
import styles from './AboutUs.module.scss'
import FormCreateBlock from './FormCreateBlock/FormCreateBlock'
import { blockData, blockListItems } from './TestData'

const AboutUs = () => {
	return (
		<section className={styles.pageSection}>
			<h1 className={styles.title}>About us</h1>
			<h2 className={styles.title}>Creating a new block</h2>
			<FormCreateBlock />
			<h2>Editing a block</h2>

			<Accordion
				columns={['ID', 'NAME', 'DATE', 'STATUS']}
				blockListItems={blockListItems}
				blockData={blockData}
			/>
		</section>
	)
}

export default AboutUs
