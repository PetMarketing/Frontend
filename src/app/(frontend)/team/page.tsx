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
		<>
			<Menu />
			<Header page='Team'></Header>
			<Section className={styles.section}>
				<h1>It's us</h1>
				<h4>
					All agencies are alike: they work in standard advertising offices, make similar setups, and definitely can't reinvent the wheel.
				</h4>
				<div className={styles.smiles}>
					<Image src={smiles} alt='smiles' />
				</div>
			</Section>
			<MembersBlock />
			<Section title='Want to join our team!'>
				<div className={styles.teamForm}>
					<TeamForm />
					<div className={styles.img}>
						<Image src={bird} alt='bird' />
					</div>
				</div>
			</Section>
			<Events />
			<Footer />
		</>
	)
}

export default Team
