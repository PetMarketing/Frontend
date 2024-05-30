import Image from 'next/image'

import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import { Section } from '@/components/Section/Section'
import BriefForm from '@/components/BriefForm/BriefForm'
import Events from '@/components/Events/Events'
import Footer from '@/components/Footer/Footer'

import banner from '@/assets/images/banner.png'
import welcome from '@/assets/images/welcome.png'

import styles from './page.module.scss'

type Props = {}

const Brief: React.FC<Props> = () => {
	return (
		<main>
			<Header page='Brief'></Header>
			<Menu />
			<Section className={styles.section}>
				<h1>Hello, dear business!</h1>
				<h4>
					All agencies are alike: they work in standard advertising offices, make similar setups, and definitely can't reinvent the wheel.
				</h4>
				<div className={styles.bannerBlock}>
					<Image src={banner} alt='banner' className={styles.banner} />
					<Image src={welcome} alt='welcome' className={styles.welcome} />
				</div>
			</Section>
			<BriefForm />
			<Events />
			<Footer />
		</main>
	)
}

export default Brief
