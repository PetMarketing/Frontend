import SamplesBlock from '@/components/ServiceBlock/ServiceBlock'
import Events from '@/components/Events/Events'
import Menu from '@/components/Menu/Menu'
import HeroSection from '@/components/HeroSection/HeroSection'
import Footer from '@/components/Footer/Footer'
import AboutUs from '@/components/AboutUs/AboutUs'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
	return (
		<main>
			<Menu />
			<HeroSection />
			<SamplesBlock />
			<AboutUs />
			<Events />
			<Footer />
		</main>
	)
}

export default Home
