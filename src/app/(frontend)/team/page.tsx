import Image from 'next/image'

import Menu from '@/components/Menu/Menu'
import Header from '@/components/Header/Header'
import { Section } from '@/components/Section/Section'
import MembersBlock from '@/components/MembersBlock/MembersBlock'
import TeamForm from '@/components/TeamForm/TeamForm'
import Events from '@/components/Events/Events'
import Footer from '@/components/Footer/Footer'

import smiles from '@/assets/images/smiles.png'
import bird from '@/assets/images/bird.png'

import styles from './page.module.scss'

type Props = {}

const Team: React.FC<Props> = () => {
	return (
		<main>
			<Menu />
			<Header page='Команда'></Header>
			<Section className={styles.section}>
				<h1>Це ми</h1>
				<h4>
					Усі агенції схожі: працюють в стандартних рекламних кабінетах, роблять
					подібні налаштування і точно не можуть вигадати велосипед.
				</h4>
				<div className={styles.smiles}>
					<Image src={smiles} alt='smiles' />
				</div>
			</Section>
			<MembersBlock />
			<Section title='Хочу у вашу тім!'>
				<div className={styles.teamForm}>
					<TeamForm />
					<div className={styles.img}>
						<Image src={bird} alt='bird' />
					</div>
				</div>
			</Section>
			<Events />
			<Footer />
		</main>
	)
}

export default Team
